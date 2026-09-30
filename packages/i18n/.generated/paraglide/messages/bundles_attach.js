/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_AttachInputs */

const en_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attach kit`)
};

const es_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adjuntar kit`)
};

const de_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit anhängen`)
};

const fr_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Associer le kit`)
};

const it_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega il kit`)
};

const nl_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit koppelen`)
};

const pl_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz zestaw`)
};

const pt_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Associar kit`)
};

const ru_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прикрепить набор`)
};

const sv_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla kit`)
};

const tr_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti bağla`)
};

const zh_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`附加合集`)
};

const ja_bundles_attach = /** @type {(inputs: Bundles_AttachInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを追加`)
};

/**
* | output |
* | --- |
* | "Attach kit" |
*
* @param {Bundles_AttachInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_attach = /** @type {((inputs?: Bundles_AttachInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_AttachInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_attach(inputs)
	if (locale === "de") return de_bundles_attach(inputs)
	if (locale === "fr") return fr_bundles_attach(inputs)
	if (locale === "it") return it_bundles_attach(inputs)
	if (locale === "nl") return nl_bundles_attach(inputs)
	if (locale === "pl") return pl_bundles_attach(inputs)
	if (locale === "pt") return pt_bundles_attach(inputs)
	if (locale === "ru") return ru_bundles_attach(inputs)
	if (locale === "sv") return sv_bundles_attach(inputs)
	if (locale === "tr") return tr_bundles_attach(inputs)
	if (locale === "zh") return zh_bundles_attach(inputs)
	if (locale === "ja") return ja_bundles_attach(inputs)
	return en_bundles_attach(inputs)
});
