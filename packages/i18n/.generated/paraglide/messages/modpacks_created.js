/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Modpacks_CreatedInputs */

const en_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Created ${i?.date}`)
};

const es_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creado el ${i?.date}`)
};

const de_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erstellt am ${i?.date}`)
};

const fr_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Créé le ${i?.date}`)
};

const it_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creato il ${i?.date}`)
};

const nl_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemaakt op ${i?.date}`)
};

const pl_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utworzono ${i?.date}`)
};

const pt_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Criado em ${i?.date}`)
};

const ru_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Создан ${i?.date}`)
};

const sv_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skapad ${i?.date}`)
};

const tr_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oluşturuldu: ${i?.date}`)
};

const zh_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`创建于 ${i?.date}`)
};

const ja_modpacks_created = /** @type {(inputs: Modpacks_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作成日: ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Created {date}" |
*
* @param {Modpacks_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_created = /** @type {((inputs: Modpacks_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_created(inputs)
	if (locale === "de") return de_modpacks_created(inputs)
	if (locale === "fr") return fr_modpacks_created(inputs)
	if (locale === "it") return it_modpacks_created(inputs)
	if (locale === "nl") return nl_modpacks_created(inputs)
	if (locale === "pl") return pl_modpacks_created(inputs)
	if (locale === "pt") return pt_modpacks_created(inputs)
	if (locale === "ru") return ru_modpacks_created(inputs)
	if (locale === "sv") return sv_modpacks_created(inputs)
	if (locale === "tr") return tr_modpacks_created(inputs)
	if (locale === "zh") return zh_modpacks_created(inputs)
	if (locale === "ja") return ja_modpacks_created(inputs)
	return en_modpacks_created(inputs)
});
