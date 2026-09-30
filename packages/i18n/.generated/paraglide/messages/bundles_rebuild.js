/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_RebuildInputs */

const en_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rebuild`)
};

const es_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar`)
};

const de_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu erstellen`)
};

const fr_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régénérer`)
};

const it_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rigenera`)
};

const nl_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw maken`)
};

const pl_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbuduj ponownie`)
};

const pt_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar`)
};

const ru_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пересобрать`)
};

const sv_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygg om`)
};

const tr_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden oluştur`)
};

const zh_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成`)
};

const ja_bundles_rebuild = /** @type {(inputs: Bundles_RebuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再生成`)
};

/**
* | output |
* | --- |
* | "Rebuild" |
*
* @param {Bundles_RebuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_rebuild = /** @type {((inputs?: Bundles_RebuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_RebuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_rebuild(inputs)
	if (locale === "de") return de_bundles_rebuild(inputs)
	if (locale === "fr") return fr_bundles_rebuild(inputs)
	if (locale === "it") return it_bundles_rebuild(inputs)
	if (locale === "nl") return nl_bundles_rebuild(inputs)
	if (locale === "pl") return pl_bundles_rebuild(inputs)
	if (locale === "pt") return pt_bundles_rebuild(inputs)
	if (locale === "ru") return ru_bundles_rebuild(inputs)
	if (locale === "sv") return sv_bundles_rebuild(inputs)
	if (locale === "tr") return tr_bundles_rebuild(inputs)
	if (locale === "zh") return zh_bundles_rebuild(inputs)
	if (locale === "ja") return ja_bundles_rebuild(inputs)
	return en_bundles_rebuild(inputs)
});
