/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcuts_DisabledInputs */

const en_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shortcuts are off. Turn them on in Settings → Preferences.`)
};

const es_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los atajos están desactivados. Actívalos en Ajustes → Preferencias.`)
};

const de_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tastenkürzel sind ausgeschaltet. Schalte sie unter Einstellungen → Präferenzen ein.`)
};

const fr_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les raccourcis sont désactivés. Activez-les dans Paramètres → Préférences.`)
};

const it_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le scorciatoie sono disattivate. Attivale in Impostazioni → Preferenze.`)
};

const nl_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sneltoetsen staan uit. Zet ze aan via Instellingen → Voorkeuren.`)
};

const pl_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skróty są wyłączone. Włącz je w Ustawienia → Preferencje.`)
};

const pt_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os atalhos estão desativados. Ative-os em Configurações → Preferências.`)
};

const ru_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Горячие клавиши выключены. Включите их в разделе Настройки → Предпочтения.`)
};

const sv_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kortkommandon är avstängda. Slå på dem under Inställningar → Preferenser.`)
};

const tr_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısayollar kapalı. Ayarlar → Tercihler bölümünden açabilirsin.`)
};

const zh_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`快捷键已关闭。可在“设置 → 偏好”中开启。`)
};

const ja_console_shortcuts_disabled = /** @type {(inputs: Console_Shortcuts_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ショートカットはオフです。設定 → 表示と操作 でオンにできます。`)
};

/**
* | output |
* | --- |
* | "Shortcuts are off. Turn them on in Settings → Preferences." |
*
* @param {Console_Shortcuts_DisabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcuts_disabled = /** @type {((inputs?: Console_Shortcuts_DisabledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcuts_DisabledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcuts_disabled(inputs)
	if (locale === "de") return de_console_shortcuts_disabled(inputs)
	if (locale === "fr") return fr_console_shortcuts_disabled(inputs)
	if (locale === "it") return it_console_shortcuts_disabled(inputs)
	if (locale === "nl") return nl_console_shortcuts_disabled(inputs)
	if (locale === "pl") return pl_console_shortcuts_disabled(inputs)
	if (locale === "pt") return pt_console_shortcuts_disabled(inputs)
	if (locale === "ru") return ru_console_shortcuts_disabled(inputs)
	if (locale === "sv") return sv_console_shortcuts_disabled(inputs)
	if (locale === "tr") return tr_console_shortcuts_disabled(inputs)
	if (locale === "zh") return zh_console_shortcuts_disabled(inputs)
	if (locale === "ja") return ja_console_shortcuts_disabled(inputs)
	return en_console_shortcuts_disabled(inputs)
});
