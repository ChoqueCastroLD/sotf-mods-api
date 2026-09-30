/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Past_End_TextInputs */

const en_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There are fewer kits than that. Head back to the first page.`)
};

const es_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay tantos kits. Vuelve a la primera página.`)
};

const de_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So viele Kits gibt es nicht. Geh zurück zur ersten Seite.`)
};

const fr_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n’y a pas autant de kits. Revenez à la première page.`)
};

const it_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono così tanti kit. Torna alla prima pagina.`)
};

const nl_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoveel kits zijn er niet. Ga terug naar de eerste pagina.`)
};

const pl_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma aż tylu zestawów. Wróć na pierwszą stronę.`)
};

const pt_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há tantos kits. Volte à primeira página.`)
};

const ru_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Столько наборов нет. Вернитесь на первую страницу.`)
};

const sv_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så många kit finns det inte. Gå tillbaka till första sidan.`)
};

const tr_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O kadar çok kit yok. İlk sayfaya dön.`)
};

const zh_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装没有那么多，请返回第一页。`)
};

const ja_kits_past_end_text = /** @type {(inputs: Kits_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットはそれほど多くありません。最初のページに戻ってください。`)
};

/**
* | output |
* | --- |
* | "There are fewer kits than that. Head back to the first page." |
*
* @param {Kits_Past_End_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_past_end_text = /** @type {((inputs?: Kits_Past_End_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Past_End_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_past_end_text(inputs)
	if (locale === "de") return de_kits_past_end_text(inputs)
	if (locale === "fr") return fr_kits_past_end_text(inputs)
	if (locale === "it") return it_kits_past_end_text(inputs)
	if (locale === "nl") return nl_kits_past_end_text(inputs)
	if (locale === "pl") return pl_kits_past_end_text(inputs)
	if (locale === "pt") return pt_kits_past_end_text(inputs)
	if (locale === "ru") return ru_kits_past_end_text(inputs)
	if (locale === "sv") return sv_kits_past_end_text(inputs)
	if (locale === "tr") return tr_kits_past_end_text(inputs)
	if (locale === "zh") return zh_kits_past_end_text(inputs)
	if (locale === "ja") return ja_kits_past_end_text(inputs)
	return en_kits_past_end_text(inputs)
});
