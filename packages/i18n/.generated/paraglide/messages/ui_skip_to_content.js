/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Skip_To_ContentInputs */

const en_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip to content`)
};

const es_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saltar al contenido`)
};

const de_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Inhalt springen`)
};

const fr_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller au contenu`)
};

const it_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai al contenuto`)
};

const nl_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar de inhoud`)
};

const pl_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do treści`)
};

const pt_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pular para o conteúdo`)
};

const ru_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к содержимому`)
};

const sv_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoppa till innehållet`)
};

const tr_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçeriğe atla`)
};

const zh_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳到主要内容`)
};

const ja_ui_skip_to_content = /** @type {(inputs: Ui_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本文へスキップ`)
};

/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Ui_Skip_To_ContentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_skip_to_content = /** @type {((inputs?: Ui_Skip_To_ContentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Skip_To_ContentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_skip_to_content(inputs)
	if (locale === "de") return de_ui_skip_to_content(inputs)
	if (locale === "fr") return fr_ui_skip_to_content(inputs)
	if (locale === "it") return it_ui_skip_to_content(inputs)
	if (locale === "nl") return nl_ui_skip_to_content(inputs)
	if (locale === "pl") return pl_ui_skip_to_content(inputs)
	if (locale === "pt") return pt_ui_skip_to_content(inputs)
	if (locale === "ru") return ru_ui_skip_to_content(inputs)
	if (locale === "sv") return sv_ui_skip_to_content(inputs)
	if (locale === "tr") return tr_ui_skip_to_content(inputs)
	if (locale === "zh") return zh_ui_skip_to_content(inputs)
	if (locale === "ja") return ja_ui_skip_to_content(inputs)
	return en_ui_skip_to_content(inputs)
});
