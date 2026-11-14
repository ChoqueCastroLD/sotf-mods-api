/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Copy_LinkInputs */

const en_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
};

const es_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar enlace`)
};

const de_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopieren`)
};

const fr_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le lien`)
};

const it_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia link`)
};

const nl_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiëren`)
};

const pl_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj link`)
};

const pt_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar link`)
};

const ru_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ссылку`)
};

const sv_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera länk`)
};

const tr_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı kopyala`)
};

const zh_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制链接`)
};

const ja_modpacks_copy_link = /** @type {(inputs: Modpacks_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピー`)
};

/**
* | output |
* | --- |
* | "Copy link" |
*
* @param {Modpacks_Copy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_copy_link = /** @type {((inputs?: Modpacks_Copy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Copy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_copy_link(inputs)
	if (locale === "de") return de_modpacks_copy_link(inputs)
	if (locale === "fr") return fr_modpacks_copy_link(inputs)
	if (locale === "it") return it_modpacks_copy_link(inputs)
	if (locale === "nl") return nl_modpacks_copy_link(inputs)
	if (locale === "pl") return pl_modpacks_copy_link(inputs)
	if (locale === "pt") return pt_modpacks_copy_link(inputs)
	if (locale === "ru") return ru_modpacks_copy_link(inputs)
	if (locale === "sv") return sv_modpacks_copy_link(inputs)
	if (locale === "tr") return tr_modpacks_copy_link(inputs)
	if (locale === "zh") return zh_modpacks_copy_link(inputs)
	if (locale === "ja") return ja_modpacks_copy_link(inputs)
	return en_modpacks_copy_link(inputs)
});
