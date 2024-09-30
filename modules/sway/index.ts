import { ConfigModule, OutputType, type Context  } from '../../mvdots';

const content = (c: Context) => `
# Use super as $mod
set $mod Mod4

# Use wezterm as $term
set $term wezterm

# Launch a new terminal
bindsym $mod+Return exec $term

# Use wofi for launching apps
set $menu wofi --show drun

# Launch menu
bindsym $mod+d exec wofi --show drun

# Set font (just for sway stuff)
font pango:${c.font.family} ${c.font.size}

# Resizing mode
mode "Resizing" {
  bindsym h resize shrink width 10px
  bindsym j resize grow height 10px
  bindsym k resize shrink height 10px
  bindsym l resize grow width 10px

  # Return to default mode
  bindsym Return mode "default"
  bindsym Escape mode "default"
}

# Enter resizing mode
bindsym $mod+r mode Resizing

# Set output resolution
output eDP-1 mode ${c.includedOutput.width}x${c.includedOutput.height} scale ${c.includedOutput.scale} pos 0 0

# Lock after 15 minutes, screen off after 20
exec swayidle -w timeout 900 'swaylock -f' timeout 1200 'swaymsg "output * dpms off"' resume 'swaymsg "output * dpms on"' before-sleep 'swaylock -f'

# Use $mod for accessing floating windows
floating_modifier $mod

# No borders (or titles)
default_border none

# Focus windows by mousing over
focus_follows_mouse yes

focus_on_window_activation smart

mouse_warping output

workspace_layout default

# Allow going to last workspace by pressing number of current workspace
workspace_auto_back_and_forth yes

# Shortcut to lock screen
bindsym $mod+Mod1+l exec swaylock

# Define workspace shortcuts
bindsym $mod+1 workspace number 1
bindsym $mod+2 workspace number 2
bindsym $mod+3 workspace number 3
bindsym $mod+4 workspace number 4
bindsym $mod+5 workspace number 5
bindsym $mod+6 workspace number 6
bindsym $mod+7 workspace number 7
bindsym $mod+8 workspace number 8
bindsym $mod+9 workspace number 9

# Shortcuts for moving stuff to workspaces
bindsym $mod+Shift+1 move container to workspace number 1
bindsym $mod+Shift+2 move container to workspace number 2
bindsym $mod+Shift+3 move container to workspace number 3
bindsym $mod+Shift+4 move container to workspace number 4
bindsym $mod+Shift+5 move container to workspace number 5
bindsym $mod+Shift+6 move container to workspace number 6
bindsym $mod+Shift+7 move container to workspace number 7
bindsym $mod+Shift+8 move container to workspace number 8
bindsym $mod+Shift+9 move container to workspace number 9

# Dunst shortcuts
bindsym $mod+BackSpace exec dunstctl close
bindsym $mod+Shift+BackSpace exec dunstctl close-all
bindsym $mod+Shift+grave exec dunstctl context
bindsym $mod+grave exec dunstctl history-pop

# Reload config
bindsym $mod+Shift+c reload

# Exit sway
bindsym $mod+Shift+e exec swaynag -t warning -m 'You pressed the exit shortcut. Do you really want to exit sway? This will end your Wayland session.' -B 'Yes, exit sway' 'swaymsg exit'

# Sway movement
bindsym $mod+h focus left
bindsym $mod+j focus down
bindsym $mod+k focus up
bindsym $mod+l focus right

# Sway focus movement
bindsym $mod+Shift+h move left
bindsym $mod+Shift+j move down
bindsym $mod+Shift+k move up
bindsym $mod+Shift+l move right

# Moving focus
bindsym $mod+space focus mode_toggle
bindsym $mod+a focus parent
bindsym $mod+b splith
bindsym $mod+v splitv

# Kill windows
bindsym $mod+Shift+q kill

# Floating
bindsym $mod+Shift+space floating toggle

# Screenshot
bindsym $mod+Shift+t exec grim

# Changing sway layouts
bindsym $mod+e layout toggle split
bindsym $mod+f fullscreen
bindsym $mod+s layout stacking
bindsym $mod+w layout tabbed

# Media keybinds
bindsym XF86AudioLowerVolume exec pamixer -ud 2
bindsym XF86AudioMute exec pamixer --toggle-mute
bindsym XF86AudioNext exec playerctl next
bindsym XF86AudioPlay exec playerctl play-pause
bindsym XF86AudioPrev exec playerctl previous
bindsym XF86AudioRaiseVolume exec pamixer -ui 2
bindsym XF86MonBrightnessDown exec brightnessctl set 5%-
bindsym XF86MonBrightnessUp exec brightnessctl set +5%

# Keyboard options
input "type:keyboard" {
  # Use caps lock as control
  xkb_options ctrl:nocaps
}

# Touchpad options
input "type:touchpad" {
  # Click by pressing down the trackpad
  click_method clickfinger
  # Or by tapping the touchpad
  tap enabled
  # Scroll the right way
  natural_scroll disabled
}

# Launch waybar
bar {
  swaybar_command waybar
}

# Gaps (space between windows)
gaps inner 4
gaps outer 4

# Import variables
exec "dbus-update-activation-environment --systemd DISPLAY WAYLAND_DISPLAY SWAYSOCK XDG_CURRENT_DESKTOP XDG_SESSION_TYPE XCURSOR_THEME XCURSOR_SIZE; systemctl --user start sway-session.target"

# Not sure if this is required
exec systemctl --user import-environment DISPLAY WAYLAND_DISPLAY SWAYSOCK

# Allow Picture-in-Picture windows to float and follow focus across workspaces
for_window [title="^Picture in picture$"] floating enable, sticky enable, border none

# Launch dunst (for notifications)
exec dunst

# Set wallpaper
# output * bg ~/src/dotfiles/wallpaper.jpg fill
`;

export const config = new ConfigModule().withBasePath("$HOME/.config/sway").withOutputs({
    ['config']: { type: OutputType.Function, transform: content },
});
