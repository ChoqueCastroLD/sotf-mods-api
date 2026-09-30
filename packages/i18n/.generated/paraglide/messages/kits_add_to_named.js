/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown> }} Kits_Add_To_NamedInputs */

const en_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add to ${i?.kit}`)
};

const es_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir a ${i?.kit}`)
};

const de_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zu ${i?.kit} hinzufügen`)
};

const fr_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter à ${i?.kit}`)
};

const it_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi a ${i?.kit}`)
};

const nl_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toevoegen aan ${i?.kit}`)
};

const pl_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj do ${i?.kit}`)
};

const pt_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar a ${i?.kit}`)
};

const ru_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить в ${i?.kit}`)
};

const sv_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till i ${i?.kit}`)
};

const tr_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} kitine ekle`)
};

const zh_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`添加到 ${i?.kit}`)
};

const ja_kits_add_to_named = /** @type {(inputs: Kits_Add_To_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} に追加`)
};

/**
* | output |
* | --- |
* | "Add to {kit}" |
*
* @param {Kits_Add_To_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_to_named = /** @type {((inputs: Kits_Add_To_NamedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_To_NamedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_to_named(inputs)
	if (locale === "de") return de_kits_add_to_named(inputs)
	if (locale === "fr") return fr_kits_add_to_named(inputs)
	if (locale === "it") return it_kits_add_to_named(inputs)
	if (locale === "nl") return nl_kits_add_to_named(inputs)
	if (locale === "pl") return pl_kits_add_to_named(inputs)
	if (locale === "pt") return pt_kits_add_to_named(inputs)
	if (locale === "ru") return ru_kits_add_to_named(inputs)
	if (locale === "sv") return sv_kits_add_to_named(inputs)
	if (locale === "tr") return tr_kits_add_to_named(inputs)
	if (locale === "zh") return zh_kits_add_to_named(inputs)
	if (locale === "ja") return ja_kits_add_to_named(inputs)
	return en_kits_add_to_named(inputs)
});
