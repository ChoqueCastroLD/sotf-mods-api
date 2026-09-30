/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Integrations_DescriptionInputs */

const en_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where the site announces new mods, versions, awards and milestones.`)
};

const es_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde anuncia el sitio los mods nuevos, las versiones, los premios y los hitos.`)
};

const de_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo die Website neue Mods, Versionen, Auszeichnungen und Meilensteine ankündigt.`)
};

const fr_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où le site annonce les nouveaux mods, les versions, les récompenses et les paliers.`)
};

const it_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove il sito annuncia nuove mod, versioni, premi e traguardi.`)
};

const nl_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar de site nieuwe mods, versies, prijzen en mijlpalen aankondigt.`)
};

const pl_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie strona ogłasza nowe mody, wersje, wyróżnienia i kamienie milowe.`)
};

const pt_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde o site anuncia mods novos, versões, prêmios e marcos.`)
};

const ru_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Куда сайт отправляет новости о новых модах, версиях, наградах и рубежах.`)
};

const sv_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var sajten meddelar nya moddar, versioner, utmärkelser och milstolpar.`)
};

const tr_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitenin yeni modları, sürümleri, ödülleri ve kilometre taşlarını duyurduğu yerler.`)
};

const zh_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站在哪里发布新模组、新版本、奖项和里程碑。`)
};

const ja_admin_integrations_description = /** @type {(inputs: Admin_Integrations_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい MOD、バージョン、アワード、マイルストーンをサイトが告知する場所。`)
};

/**
* | output |
* | --- |
* | "Where the site announces new mods, versions, awards and milestones." |
*
* @param {Admin_Integrations_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_integrations_description = /** @type {((inputs?: Admin_Integrations_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Integrations_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_integrations_description(inputs)
	if (locale === "de") return de_admin_integrations_description(inputs)
	if (locale === "fr") return fr_admin_integrations_description(inputs)
	if (locale === "it") return it_admin_integrations_description(inputs)
	if (locale === "nl") return nl_admin_integrations_description(inputs)
	if (locale === "pl") return pl_admin_integrations_description(inputs)
	if (locale === "pt") return pt_admin_integrations_description(inputs)
	if (locale === "ru") return ru_admin_integrations_description(inputs)
	if (locale === "sv") return sv_admin_integrations_description(inputs)
	if (locale === "tr") return tr_admin_integrations_description(inputs)
	if (locale === "zh") return zh_admin_integrations_description(inputs)
	if (locale === "ja") return ja_admin_integrations_description(inputs)
	return en_admin_integrations_description(inputs)
});
