/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Link_CopiedInputs */

const en_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copied.`)
};

const es_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace copiado.`)
};

const de_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiert.`)
};

const fr_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien copié.`)
};

const it_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copiato.`)
};

const nl_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link gekopieerd.`)
};

const pl_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano link.`)
};

const pt_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copiado.`)
};

const ru_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка скопирована.`)
};

const sv_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länken kopierad.`)
};

const tr_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kopyalandı.`)
};

const zh_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已复制。`)
};

const ja_builds_link_copied = /** @type {(inputs: Builds_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピーしました。`)
};

/**
* | output |
* | --- |
* | "Link copied." |
*
* @param {Builds_Link_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_link_copied = /** @type {((inputs?: Builds_Link_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Link_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_link_copied(inputs)
	if (locale === "de") return de_builds_link_copied(inputs)
	if (locale === "fr") return fr_builds_link_copied(inputs)
	if (locale === "it") return it_builds_link_copied(inputs)
	if (locale === "nl") return nl_builds_link_copied(inputs)
	if (locale === "pl") return pl_builds_link_copied(inputs)
	if (locale === "pt") return pt_builds_link_copied(inputs)
	if (locale === "ru") return ru_builds_link_copied(inputs)
	if (locale === "sv") return sv_builds_link_copied(inputs)
	if (locale === "tr") return tr_builds_link_copied(inputs)
	if (locale === "zh") return zh_builds_link_copied(inputs)
	if (locale === "ja") return ja_builds_link_copied(inputs)
	return en_builds_link_copied(inputs)
});
