/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Adopt_DoneInputs */

const en_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are now working on this request.`)
};

const es_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora trabajas en esta petición.`)
};

const de_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du arbeitest jetzt an diesem Wunsch.`)
};

const fr_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous travaillez maintenant sur cette demande.`)
};

const it_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ora stai lavorando a questa richiesta.`)
};

const nl_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je werkt nu aan dit verzoek.`)
};

const pl_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pracujesz teraz nad tą prośbą.`)
};

const pt_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você agora está trabalhando neste pedido.`)
};

const ru_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теперь вы работаете над этим запросом.`)
};

const sv_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du arbetar nu på det här önskemålet.`)
};

const tr_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Artık bu istek üzerinde çalışıyorsunuz.`)
};

const zh_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你现在正在处理这个请求。`)
};

const ja_requests_adopt_done = /** @type {(inputs: Requests_Adopt_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストに取り組み中になりました。`)
};

/**
* | output |
* | --- |
* | "You are now working on this request." |
*
* @param {Requests_Adopt_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_adopt_done = /** @type {((inputs?: Requests_Adopt_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Adopt_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_adopt_done(inputs)
	if (locale === "de") return de_requests_adopt_done(inputs)
	if (locale === "fr") return fr_requests_adopt_done(inputs)
	if (locale === "it") return it_requests_adopt_done(inputs)
	if (locale === "nl") return nl_requests_adopt_done(inputs)
	if (locale === "pl") return pl_requests_adopt_done(inputs)
	if (locale === "pt") return pt_requests_adopt_done(inputs)
	if (locale === "ru") return ru_requests_adopt_done(inputs)
	if (locale === "sv") return sv_requests_adopt_done(inputs)
	if (locale === "tr") return tr_requests_adopt_done(inputs)
	if (locale === "zh") return zh_requests_adopt_done(inputs)
	if (locale === "ja") return ja_requests_adopt_done(inputs)
	return en_requests_adopt_done(inputs)
});
