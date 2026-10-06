/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_BasecampInputs */

const en_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open dashboard`)
};

const es_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir el panel`)
};

const de_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard öffnen`)
};

const fr_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le tableau de bord`)
};

const it_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la dashboard`)
};

const nl_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard openen`)
};

const pl_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz panel`)
};

const pt_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir o painel`)
};

const ru_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть панель`)
};

const sv_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna översikten`)
};

const tr_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paneli aç`)
};

const zh_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开控制台`)
};

const ja_settings_creator_basecamp = /** @type {(inputs: Settings_Creator_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボードを開く`)
};

/**
* | output |
* | --- |
* | "Open dashboard" |
*
* @param {Settings_Creator_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_basecamp = /** @type {((inputs?: Settings_Creator_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_basecamp(inputs)
	if (locale === "de") return de_settings_creator_basecamp(inputs)
	if (locale === "fr") return fr_settings_creator_basecamp(inputs)
	if (locale === "it") return it_settings_creator_basecamp(inputs)
	if (locale === "nl") return nl_settings_creator_basecamp(inputs)
	if (locale === "pl") return pl_settings_creator_basecamp(inputs)
	if (locale === "pt") return pt_settings_creator_basecamp(inputs)
	if (locale === "ru") return ru_settings_creator_basecamp(inputs)
	if (locale === "sv") return sv_settings_creator_basecamp(inputs)
	if (locale === "tr") return tr_settings_creator_basecamp(inputs)
	if (locale === "zh") return zh_settings_creator_basecamp(inputs)
	if (locale === "ja") return ja_settings_creator_basecamp(inputs)
	return en_settings_creator_basecamp(inputs)
});
