/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_ActivityInputs */

const en_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show my activity`)
};

const es_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mi actividad`)
};

const de_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Aktivität zeigen`)
};

const fr_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher mon activité`)
};

const it_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra la mia attività`)
};

const nl_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn activiteit tonen`)
};

const pl_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuj moją aktywność`)
};

const pt_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar minha atividade`)
};

const ru_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать мою активность`)
};

const sv_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa min aktivitet`)
};

const tr_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkinliğimi göster`)
};

const zh_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示我的动态`)
};

const ja_settings_show_activity = /** @type {(inputs: Settings_Show_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティビティを表示`)
};

/**
* | output |
* | --- |
* | "Show my activity" |
*
* @param {Settings_Show_ActivityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_activity = /** @type {((inputs?: Settings_Show_ActivityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_ActivityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_activity(inputs)
	if (locale === "de") return de_settings_show_activity(inputs)
	if (locale === "fr") return fr_settings_show_activity(inputs)
	if (locale === "it") return it_settings_show_activity(inputs)
	if (locale === "nl") return nl_settings_show_activity(inputs)
	if (locale === "pl") return pl_settings_show_activity(inputs)
	if (locale === "pt") return pt_settings_show_activity(inputs)
	if (locale === "ru") return ru_settings_show_activity(inputs)
	if (locale === "sv") return sv_settings_show_activity(inputs)
	if (locale === "tr") return tr_settings_show_activity(inputs)
	if (locale === "zh") return zh_settings_show_activity(inputs)
	if (locale === "ja") return ja_settings_show_activity(inputs)
	return en_settings_show_activity(inputs)
});
