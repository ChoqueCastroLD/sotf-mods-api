/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Version_DetailsInputs */

const en_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version details`)
};

const es_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles de la versión`)
};

const de_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsdetails`)
};

const fr_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails de la version`)
};

const it_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli della versione`)
};

const nl_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiedetails`)
};

const pl_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły wersji`)
};

const pt_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes da versão`)
};

const ru_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробнее о версии`)
};

const sv_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsdetaljer`)
};

const tr_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm ayrıntıları`)
};

const zh_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本详情`)
};

const ja_entity_version_details = /** @type {(inputs: Entity_Version_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンの詳細`)
};

/**
* | output |
* | --- |
* | "Version details" |
*
* @param {Entity_Version_DetailsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_version_details = /** @type {((inputs?: Entity_Version_DetailsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Version_DetailsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_version_details(inputs)
	if (locale === "de") return de_entity_version_details(inputs)
	if (locale === "fr") return fr_entity_version_details(inputs)
	if (locale === "it") return it_entity_version_details(inputs)
	if (locale === "nl") return nl_entity_version_details(inputs)
	if (locale === "pl") return pl_entity_version_details(inputs)
	if (locale === "pt") return pt_entity_version_details(inputs)
	if (locale === "ru") return ru_entity_version_details(inputs)
	if (locale === "sv") return sv_entity_version_details(inputs)
	if (locale === "tr") return tr_entity_version_details(inputs)
	if (locale === "zh") return zh_entity_version_details(inputs)
	if (locale === "ja") return ja_entity_version_details(inputs)
	return en_entity_version_details(inputs)
});
