/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Copy_HashInputs */

const en_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy SHA-256`)
};

const es_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar SHA-256`)
};

const de_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SHA-256 kopieren`)
};

const fr_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le SHA-256`)
};

const it_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia SHA-256`)
};

const nl_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SHA-256 kopiëren`)
};

const pl_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj SHA-256`)
};

const pt_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar SHA-256`)
};

const ru_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировать SHA-256`)
};

const sv_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera SHA-256`)
};

const tr_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SHA-256’yı kopyala`)
};

const zh_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制 SHA-256`)
};

const ja_mod_copy_hash = /** @type {(inputs: Mod_Copy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SHA-256 をコピー`)
};

/**
* | output |
* | --- |
* | "Copy SHA-256" |
*
* @param {Mod_Copy_HashInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_copy_hash = /** @type {((inputs?: Mod_Copy_HashInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Copy_HashInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_copy_hash(inputs)
	if (locale === "de") return de_mod_copy_hash(inputs)
	if (locale === "fr") return fr_mod_copy_hash(inputs)
	if (locale === "it") return it_mod_copy_hash(inputs)
	if (locale === "nl") return nl_mod_copy_hash(inputs)
	if (locale === "pl") return pl_mod_copy_hash(inputs)
	if (locale === "pt") return pt_mod_copy_hash(inputs)
	if (locale === "ru") return ru_mod_copy_hash(inputs)
	if (locale === "sv") return sv_mod_copy_hash(inputs)
	if (locale === "tr") return tr_mod_copy_hash(inputs)
	if (locale === "zh") return zh_mod_copy_hash(inputs)
	if (locale === "ja") return ja_mod_copy_hash(inputs)
	return en_mod_copy_hash(inputs)
});
