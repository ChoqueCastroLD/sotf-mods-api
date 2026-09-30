/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Defaults_Local_NoteInputs */

const en_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`These defaults are saved in this browser only.`)
};

const es_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estos valores se guardan solo en este navegador.`)
};

const de_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Standards werden nur in diesem Browser gespeichert.`)
};

const fr_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ces valeurs sont enregistrées uniquement dans ce navigateur.`)
};

const it_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queste impostazioni sono salvate solo in questo browser.`)
};

const nl_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze standaardwaarden worden alleen in deze browser opgeslagen.`)
};

const pl_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te ustawienia są zapisane tylko w tej przeglądarce.`)
};

const pt_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estes padrões ficam salvos apenas neste navegador.`)
};

const ru_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эти настройки хранятся только в этом браузере.`)
};

const sv_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardvalen sparas bara i den här webbläsaren.`)
};

const tr_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu varsayılanlar yalnızca bu tarayıcıda kaydedilir.`)
};

const zh_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这些默认设置仅保存在此浏览器中。`)
};

const ja_settings_defaults_local_note = /** @type {(inputs: Settings_Defaults_Local_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらの既定値はこのブラウザーにのみ保存されます。`)
};

/**
* | output |
* | --- |
* | "These defaults are saved in this browser only." |
*
* @param {Settings_Defaults_Local_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_defaults_local_note = /** @type {((inputs?: Settings_Defaults_Local_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Defaults_Local_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_defaults_local_note(inputs)
	if (locale === "de") return de_settings_defaults_local_note(inputs)
	if (locale === "fr") return fr_settings_defaults_local_note(inputs)
	if (locale === "it") return it_settings_defaults_local_note(inputs)
	if (locale === "nl") return nl_settings_defaults_local_note(inputs)
	if (locale === "pl") return pl_settings_defaults_local_note(inputs)
	if (locale === "pt") return pt_settings_defaults_local_note(inputs)
	if (locale === "ru") return ru_settings_defaults_local_note(inputs)
	if (locale === "sv") return sv_settings_defaults_local_note(inputs)
	if (locale === "tr") return tr_settings_defaults_local_note(inputs)
	if (locale === "zh") return zh_settings_defaults_local_note(inputs)
	if (locale === "ja") return ja_settings_defaults_local_note(inputs)
	return en_settings_defaults_local_note(inputs)
});
