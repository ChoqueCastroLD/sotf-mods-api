/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_CreatedInputs */

const en_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” created`)
};

const es_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» creado`)
};

const de_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ erstellt`)
};

const fr_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.name} » créé`)
};

const it_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» creato`)
};

const nl_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.name}’ gemaakt`)
};

const pl_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utworzono „${i?.name}”`)
};

const pt_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” criado`)
};

const ru_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» создан`)
};

const sv_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.name}” har skapats`)
};

const tr_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” oluşturuldu`)
};

const zh_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已创建“${i?.name}”`)
};

const ja_kits_created = /** @type {(inputs: Kits_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」を作成しました`)
};

/**
* | output |
* | --- |
* | "“{name}” created" |
*
* @param {Kits_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_created = /** @type {((inputs: Kits_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_created(inputs)
	if (locale === "de") return de_kits_created(inputs)
	if (locale === "fr") return fr_kits_created(inputs)
	if (locale === "it") return it_kits_created(inputs)
	if (locale === "nl") return nl_kits_created(inputs)
	if (locale === "pl") return pl_kits_created(inputs)
	if (locale === "pt") return pt_kits_created(inputs)
	if (locale === "ru") return ru_kits_created(inputs)
	if (locale === "sv") return sv_kits_created(inputs)
	if (locale === "tr") return tr_kits_created(inputs)
	if (locale === "zh") return zh_kits_created(inputs)
	if (locale === "ja") return ja_kits_created(inputs)
	return en_kits_created(inputs)
});
