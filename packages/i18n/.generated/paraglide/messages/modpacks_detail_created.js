/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Detail_CreatedInputs */

const en_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created`)
};

const es_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creado`)
};

const de_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstellt`)
};

const fr_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créé`)
};

const it_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creato`)
};

const nl_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemaakt`)
};

const pl_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utworzono`)
};

const pt_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criado`)
};

const ru_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создан`)
};

const sv_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapad`)
};

const tr_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oluşturuldu`)
};

const zh_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建于`)
};

const ja_modpacks_detail_created = /** @type {(inputs: Modpacks_Detail_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成日`)
};

/**
* | output |
* | --- |
* | "Created" |
*
* @param {Modpacks_Detail_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_created = /** @type {((inputs?: Modpacks_Detail_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_created(inputs)
	if (locale === "de") return de_modpacks_detail_created(inputs)
	if (locale === "fr") return fr_modpacks_detail_created(inputs)
	if (locale === "it") return it_modpacks_detail_created(inputs)
	if (locale === "nl") return nl_modpacks_detail_created(inputs)
	if (locale === "pl") return pl_modpacks_detail_created(inputs)
	if (locale === "pt") return pt_modpacks_detail_created(inputs)
	if (locale === "ru") return ru_modpacks_detail_created(inputs)
	if (locale === "sv") return sv_modpacks_detail_created(inputs)
	if (locale === "tr") return tr_modpacks_detail_created(inputs)
	if (locale === "zh") return zh_modpacks_detail_created(inputs)
	if (locale === "ja") return ja_modpacks_detail_created(inputs)
	return en_modpacks_detail_created(inputs)
});
