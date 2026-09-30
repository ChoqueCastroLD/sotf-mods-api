/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Visibility_TextInputs */

const en_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn off anything you’d rather keep to yourself.`)
};

const es_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desactiva lo que prefieras guardarte para ti.`)
};

const de_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schalte alles aus, was du lieber für dich behältst.`)
};

const fr_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactivez tout ce que vous préférez garder pour vous.`)
};

const it_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disattiva ciò che preferisci tenere per te.`)
};

const nl_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet uit wat je liever voor jezelf houdt.`)
};

const pl_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłącz to, co wolisz zachować dla siebie.`)
};

const pt_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desative o que você prefere guardar para si.`)
};

const ru_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выключите то, что предпочитаете держать при себе.`)
};

const sv_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng av det du hellre håller för dig själv.`)
};

const tr_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendine saklamayı tercih ettiğin her şeyi kapat.`)
};

const zh_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭你不想公开的内容。`)
};

const ja_settings_visibility_text = /** @type {(inputs: Settings_Visibility_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開したくないものはオフにしてください。`)
};

/**
* | output |
* | --- |
* | "Turn off anything you’d rather keep to yourself." |
*
* @param {Settings_Visibility_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_visibility_text = /** @type {((inputs?: Settings_Visibility_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Visibility_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_visibility_text(inputs)
	if (locale === "de") return de_settings_visibility_text(inputs)
	if (locale === "fr") return fr_settings_visibility_text(inputs)
	if (locale === "it") return it_settings_visibility_text(inputs)
	if (locale === "nl") return nl_settings_visibility_text(inputs)
	if (locale === "pl") return pl_settings_visibility_text(inputs)
	if (locale === "pt") return pt_settings_visibility_text(inputs)
	if (locale === "ru") return ru_settings_visibility_text(inputs)
	if (locale === "sv") return sv_settings_visibility_text(inputs)
	if (locale === "tr") return tr_settings_visibility_text(inputs)
	if (locale === "zh") return zh_settings_visibility_text(inputs)
	if (locale === "ja") return ja_settings_visibility_text(inputs)
	return en_settings_visibility_text(inputs)
});
