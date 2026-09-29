/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Skip_To_ContentInputs */

const en_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip to content`)
};

const es_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saltar al contenido`)
};

const de_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Inhalt springen`)
};

const fr_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller au contenu`)
};

const it_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai al contenuto`)
};

const nl_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de inhoud`)
};

const pl_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do treści`)
};

const pt_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pular para o conteúdo`)
};

const ru_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к содержимому`)
};

const sv_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoppa till innehållet`)
};

const tr_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçeriğe geç`)
};

const zh_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳到正文`)
};

const ja_common_skip_to_content = /** @type {(inputs: Common_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本文へスキップ`)
};

/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Common_Skip_To_ContentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_skip_to_content = /** @type {((inputs?: Common_Skip_To_ContentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Skip_To_ContentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_skip_to_content(inputs)
	if (locale === "de") return de_common_skip_to_content(inputs)
	if (locale === "fr") return fr_common_skip_to_content(inputs)
	if (locale === "it") return it_common_skip_to_content(inputs)
	if (locale === "nl") return nl_common_skip_to_content(inputs)
	if (locale === "pl") return pl_common_skip_to_content(inputs)
	if (locale === "pt") return pt_common_skip_to_content(inputs)
	if (locale === "ru") return ru_common_skip_to_content(inputs)
	if (locale === "sv") return sv_common_skip_to_content(inputs)
	if (locale === "tr") return tr_common_skip_to_content(inputs)
	if (locale === "zh") return zh_common_skip_to_content(inputs)
	if (locale === "ja") return ja_common_skip_to_content(inputs)
	return en_common_skip_to_content(inputs)
});
