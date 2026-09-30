/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Tokens_Meta_CreatedInputs */

const en_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Created ${i?.date}`)
};

const es_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creado el ${i?.date}`)
};

const de_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erstellt am ${i?.date}`)
};

const fr_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Créé le ${i?.date}`)
};

const it_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creato il ${i?.date}`)
};

const nl_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemaakt op ${i?.date}`)
};

const pl_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utworzono ${i?.date}`)
};

const pt_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Criado em ${i?.date}`)
};

const ru_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Создан ${i?.date}`)
};

const sv_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skapad ${i?.date}`)
};

const tr_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oluşturulma: ${i?.date}`)
};

const zh_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`创建于 ${i?.date}`)
};

const ja_tokens_meta_created = /** @type {(inputs: Tokens_Meta_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作成日 ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Created {date}" |
*
* @param {Tokens_Meta_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_meta_created = /** @type {((inputs: Tokens_Meta_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_meta_created(inputs)
	if (locale === "de") return de_tokens_meta_created(inputs)
	if (locale === "fr") return fr_tokens_meta_created(inputs)
	if (locale === "it") return it_tokens_meta_created(inputs)
	if (locale === "nl") return nl_tokens_meta_created(inputs)
	if (locale === "pl") return pl_tokens_meta_created(inputs)
	if (locale === "pt") return pt_tokens_meta_created(inputs)
	if (locale === "ru") return ru_tokens_meta_created(inputs)
	if (locale === "sv") return sv_tokens_meta_created(inputs)
	if (locale === "tr") return tr_tokens_meta_created(inputs)
	if (locale === "zh") return zh_tokens_meta_created(inputs)
	if (locale === "ja") return ja_tokens_meta_created(inputs)
	return en_tokens_meta_created(inputs)
});
