/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Remove_ModInputs */

const en_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
};

const es_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.name}`)
};

const de_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernen`)
};

const fr_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name}`)
};

const it_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.name}`)
};

const nl_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.name}`)
};

const ru_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.name}`)
};

const sv_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kaldır`)
};

const zh_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.name}`)
};

const ja_modpacks_remove_mod = /** @type {(inputs: Modpacks_Remove_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除`)
};

/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Modpacks_Remove_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_remove_mod = /** @type {((inputs: Modpacks_Remove_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Remove_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_remove_mod(inputs)
	if (locale === "de") return de_modpacks_remove_mod(inputs)
	if (locale === "fr") return fr_modpacks_remove_mod(inputs)
	if (locale === "it") return it_modpacks_remove_mod(inputs)
	if (locale === "nl") return nl_modpacks_remove_mod(inputs)
	if (locale === "pl") return pl_modpacks_remove_mod(inputs)
	if (locale === "pt") return pt_modpacks_remove_mod(inputs)
	if (locale === "ru") return ru_modpacks_remove_mod(inputs)
	if (locale === "sv") return sv_modpacks_remove_mod(inputs)
	if (locale === "tr") return tr_modpacks_remove_mod(inputs)
	if (locale === "zh") return zh_modpacks_remove_mod(inputs)
	if (locale === "ja") return ja_modpacks_remove_mod(inputs)
	return en_modpacks_remove_mod(inputs)
});
