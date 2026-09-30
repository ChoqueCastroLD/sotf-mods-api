/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Releases_DescriptionInputs */

const en_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest first per tool.`)
};

const es_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La más reciente primero, por herramienta.`)
};

const de_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste zuerst, pro Werkzeug.`)
};

const fr_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La plus récente d’abord, par outil.`)
};

const it_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalla più recente, per strumento.`)
};

const nl_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste eerst, per tool.`)
};

const pl_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od najnowszego, dla każdego narzędzia.`)
};

const pt_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes primeiro, por ferramenta.`)
};

const ru_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые, по каждому инструменту.`)
};

const sv_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste först, per verktyg.`)
};

const tr_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her araç için en yeni önce.`)
};

const zh_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按工具分组，最新的在前。`)
};

const ja_admin_eco_releases_description = /** @type {(inputs: Admin_Eco_Releases_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ツールごとに新しい順。`)
};

/**
* | output |
* | --- |
* | "Newest first per tool." |
*
* @param {Admin_Eco_Releases_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_releases_description = /** @type {((inputs?: Admin_Eco_Releases_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Releases_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_releases_description(inputs)
	if (locale === "de") return de_admin_eco_releases_description(inputs)
	if (locale === "fr") return fr_admin_eco_releases_description(inputs)
	if (locale === "it") return it_admin_eco_releases_description(inputs)
	if (locale === "nl") return nl_admin_eco_releases_description(inputs)
	if (locale === "pl") return pl_admin_eco_releases_description(inputs)
	if (locale === "pt") return pt_admin_eco_releases_description(inputs)
	if (locale === "ru") return ru_admin_eco_releases_description(inputs)
	if (locale === "sv") return sv_admin_eco_releases_description(inputs)
	if (locale === "tr") return tr_admin_eco_releases_description(inputs)
	if (locale === "zh") return zh_admin_eco_releases_description(inputs)
	if (locale === "ja") return ja_admin_eco_releases_description(inputs)
	return en_admin_eco_releases_description(inputs)
});
