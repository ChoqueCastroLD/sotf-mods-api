/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_Link_CopiedInputs */

const en_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copied`)
};

const es_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace copiado`)
};

const de_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiert`)
};

const fr_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien copié`)
};

const it_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link copiato`)
};

const nl_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link gekopieerd`)
};

const pl_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano link`)
};

const pt_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligação copiada`)
};

const ru_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка скопирована`)
};

const sv_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk kopierad`)
};

const tr_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kopyalandı`)
};

const zh_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接已复制`)
};

const ja_cmdk_act_link_copied = /** @type {(inputs: Cmdk_Act_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピーしました`)
};

/**
* | output |
* | --- |
* | "Link copied" |
*
* @param {Cmdk_Act_Link_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_link_copied = /** @type {((inputs?: Cmdk_Act_Link_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Link_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_link_copied(inputs)
	if (locale === "de") return de_cmdk_act_link_copied(inputs)
	if (locale === "fr") return fr_cmdk_act_link_copied(inputs)
	if (locale === "it") return it_cmdk_act_link_copied(inputs)
	if (locale === "nl") return nl_cmdk_act_link_copied(inputs)
	if (locale === "pl") return pl_cmdk_act_link_copied(inputs)
	if (locale === "pt") return pt_cmdk_act_link_copied(inputs)
	if (locale === "ru") return ru_cmdk_act_link_copied(inputs)
	if (locale === "sv") return sv_cmdk_act_link_copied(inputs)
	if (locale === "tr") return tr_cmdk_act_link_copied(inputs)
	if (locale === "zh") return zh_cmdk_act_link_copied(inputs)
	if (locale === "ja") return ja_cmdk_act_link_copied(inputs)
	return en_cmdk_act_link_copied(inputs)
});
