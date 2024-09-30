import { ConfigModule, OutputType, type Context } from '../../mvdots';

const waybarConfig = [
  {
    "modules-left": [
      "sway/workspaces",
      "sway/mode"
    ],
    "modules-center": [
      "clock"
    ],
    "modules-right": [
      "idle_inhibitor",
      "backlight",
      "pulseaudio",
      "network",
      "cpu",
      "memory",
      "temperature",
      "battery",
      "tray",
      "custom/power"
    ],
    "backlight": {
      "format": "{percent}% {icon}",
      "format-icons": [
        ""
      ]
    },
    "battery": {
      "format": "{capacity}% {icon}",
      "format-alt": "{time} {icon}",
      "format-charging": "{capacity}% 󰂄",
      "format-icons": [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "format-plugged": "{capacity}% ",
      "format-time": "{H}:{M}",
      "full-at": 99,
      "states": {
        "critical": 15,
        "good": 95,
        "warning": 30
      }
    },
    "clock": {
      "format-alt": "{:Y-%m-%d}",
      "tooltip-format": "<big>{:%Y %B}</big>\n<tt><small>{calendar}</small></tt>"
    },
    "cpu": {
      "format": "{usage}% ",
      "tooltip": false
    },
    "custom/power": {
      "format": " ⏻ ",
      "on-click": "wlogout"
    },
    "height": 32,
    "idle_inhibitor": {
      "format": "{icon}",
      "format-icons": {
        "activated": "",
        "deactivated": ""
      }
    },
    "memory": {
      "format": "{}% ",
      "tooltip": false
    },
    "network": {
      "format-alt": "{ifname}: {ipaddr}/{cidr}",
      "format-disconnected": " Disconnected",
      "format-ethernet": "󰈁 {ifname}",
      "format-linked": "{ifname} (No IP)",
      "format-wifi": "{signalStrength}% "
    },
    "position": "top",
    "pulseaudio": {
      "format": "{volume}% {icon}",
      "format-bluetooth": "{volume}% {icon} {format_source}",
      "format-bluetooth-muted": "{icon} {format_source}",
      "format-icons": {
        "car": "",
        "default": [
          "",
          "",
          ""
        ],
        "headphone": "",
        "phone": "",
        "portable": ""
      },
      "format-muted": "",
      "format-source": "{volume}% ",
      "format-source-muted": "",
      "on-click": "pavucontrol",
      "scroll-step": 1
    },
    "sway/mode": {
      "format": "<span style=\"italic\">{}</span>"
    },
    "sway/window": {
      "format": "{}",
      "max-length": 40,
      "rewrite": {
        "(.*) - Mozilla Firefox": "Firefox: $1"
      }
    },
    "temperature": {
      "critical-threshold": 75,
      "format": "{temperatureC}°C ",
      "hwmon-path": [
        "/sys/class/hwmon/hwmon4/temp1_input"
      ]
    },
    "tray": {
      "spacing": 10
    }
  }
];

const waybarStyle = (c: Context) => `
* {
  border: none;
  font-family: "${c.font.family} ${c.font.style}";
  font-size: ${c.font.size}px;
  min-height: 0;
  background-color: ${c.colors.bg};
  color: ${c.colors.base.black};
}

window#waybar {
  background-color: ${c.colors.bg};
}

#workspaces button {
  padding: 0 4px;
  margin-right: 8px;
  color: ${c.colors.base.magenta};
  background-color: ${c.colors.bg};
  box-shadow: inset 0 -3px ${c.colors.bg};
  border-bottom: 4px solid ${c.colors.bg};
  border-radius: 0px;
}

#workspaces button.focused {
  padding: 0 4px;
  margin-right: 8px;
  border-bottom: 4px solid ${c.colors.base.magenta};
  box-shadow: inset 0 -3px ${c.colors.bg};
  color: ${c.colors.base.black};
  background-color: ${c.colors.bg};
  border-radius: 0px;
}

#workspaces button:hover{
  box-shadow: inherit;
  text-shadow: inherit;
  color: ${c.colors.base.black};
  background: ${c.colors.bg};
}

#custom-power,
#clock,
#battery,
#cpu,
#memory,
#disk,
#custom-temperature,
#temperature,
#backlight,
#network,
#pulseaudio,
#tray,
#mode,
#idle_inhibitor {
  padding: 0 10px;
  margin: 0 2px;
  border-bottom: 4px solid ${c.colors.base.magenta};
}

#temperature.warning,
#custom-temperature.warning,
#battery.warning {
  color: ${c.colors.base.yellow};
  border-bottom: 4px solid ${c.colors.base.yellow};
}

#temperature.critical,
#custom-temperature.critical,
#battery.critical {
  color: ${c.colors.base.red};
  border-bottom: 4px solid ${c.colors.base.red};
}
`;

export const config = new ConfigModule().withBasePath("$HOME/.config/waybar").withOutputs({
  ["config"]: { type: OutputType.String, literal: JSON.stringify(waybarConfig) },
  ["style.css"]: { type: OutputType.Function, transform: waybarStyle },
});
