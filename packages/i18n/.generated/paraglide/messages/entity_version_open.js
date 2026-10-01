/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Entity_Version_OpenInputs */

const en_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changelog of version ${i?.version}`)
};

const es_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambios de la versión ${i?.version}`)
};

const de_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen in Version ${i?.version}`)
};

const fr_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifications de la version ${i?.version}`)
};

const it_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifiche della versione ${i?.version}`)
};

const nl_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen in versie ${i?.version}`)
};

const pl_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmiany w wersji ${i?.version}`)
};

const pt_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alterações da versão ${i?.version}`)
};

const ru_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменения в версии ${i?.version}`)
};

const sv_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringar i version ${i?.version}`)
};

const tr_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümünün değişiklikleri`)
};

const zh_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version} 的更新内容`)
};

const ja_entity_version_open = /** @type {(inputs: Entity_Version_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version} の変更点`)
};

/**
* | output |
* | --- |
* | "Changelog of version {version}" |
*
* @param {Entity_Version_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_version_open = /** @type {((inputs: Entity_Version_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Version_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_version_open(inputs)
	if (locale === "de") return de_entity_version_open(inputs)
	if (locale === "fr") return fr_entity_version_open(inputs)
	if (locale === "it") return it_entity_version_open(inputs)
	if (locale === "nl") return nl_entity_version_open(inputs)
	if (locale === "pl") return pl_entity_version_open(inputs)
	if (locale === "pt") return pt_entity_version_open(inputs)
	if (locale === "ru") return ru_entity_version_open(inputs)
	if (locale === "sv") return sv_entity_version_open(inputs)
	if (locale === "tr") return tr_entity_version_open(inputs)
	if (locale === "zh") return zh_entity_version_open(inputs)
	if (locale === "ja") return ja_entity_version_open(inputs)
	return en_entity_version_open(inputs)
});
