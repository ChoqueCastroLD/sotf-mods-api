/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Link_CopiedInputs */

const en_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copied`)
};

const es_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace copiado`)
};

const de_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiert`)
};

const fr_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien copié`)
};

const it_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copiato`)
};

const nl_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link gekopieerd`)
};

const pl_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano link`)
};

const pt_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copiado`)
};

const ru_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка скопирована`)
};

const sv_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länken kopierades`)
};

const tr_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kopyalandı`)
};

const zh_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已复制`)
};

const ja_modpacks_link_copied = /** @type {(inputs: Modpacks_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピーしました`)
};

/**
* | output |
* | --- |
* | "Link copied" |
*
* @param {Modpacks_Link_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_link_copied = /** @type {((inputs?: Modpacks_Link_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Link_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_link_copied(inputs)
	if (locale === "de") return de_modpacks_link_copied(inputs)
	if (locale === "fr") return fr_modpacks_link_copied(inputs)
	if (locale === "it") return it_modpacks_link_copied(inputs)
	if (locale === "nl") return nl_modpacks_link_copied(inputs)
	if (locale === "pl") return pl_modpacks_link_copied(inputs)
	if (locale === "pt") return pt_modpacks_link_copied(inputs)
	if (locale === "ru") return ru_modpacks_link_copied(inputs)
	if (locale === "sv") return sv_modpacks_link_copied(inputs)
	if (locale === "tr") return tr_modpacks_link_copied(inputs)
	if (locale === "zh") return zh_modpacks_link_copied(inputs)
	if (locale === "ja") return ja_modpacks_link_copied(inputs)
	return en_modpacks_link_copied(inputs)
});
