/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Vote_OwnInputs */

const en_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You cannot vote for your own request.`)
};

const es_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puedes votar tu propia petición.`)
};

const de_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für den eigenen Wunsch kann man nicht abstimmen.`)
};

const fr_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne pouvez pas voter pour votre propre demande.`)
};

const it_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non puoi votare la tua richiesta.`)
};

const nl_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt niet op je eigen verzoek stemmen.`)
};

const pl_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możesz głosować na własną prośbę.`)
};

const pt_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não pode votar no seu próprio pedido.`)
};

const ru_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нельзя голосовать за свой запрос.`)
};

const sv_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan inte rösta på ditt eget önskemål.`)
};

const tr_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendi isteğinize oy veremezsiniz.`)
};

const zh_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不能为自己的请求投票。`)
};

const ja_requests_vote_own = /** @type {(inputs: Requests_Vote_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のリクエストには投票できません。`)
};

/**
* | output |
* | --- |
* | "You cannot vote for your own request." |
*
* @param {Requests_Vote_OwnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_vote_own = /** @type {((inputs?: Requests_Vote_OwnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Vote_OwnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_vote_own(inputs)
	if (locale === "de") return de_requests_vote_own(inputs)
	if (locale === "fr") return fr_requests_vote_own(inputs)
	if (locale === "it") return it_requests_vote_own(inputs)
	if (locale === "nl") return nl_requests_vote_own(inputs)
	if (locale === "pl") return pl_requests_vote_own(inputs)
	if (locale === "pt") return pt_requests_vote_own(inputs)
	if (locale === "ru") return ru_requests_vote_own(inputs)
	if (locale === "sv") return sv_requests_vote_own(inputs)
	if (locale === "tr") return tr_requests_vote_own(inputs)
	if (locale === "zh") return zh_requests_vote_own(inputs)
	if (locale === "ja") return ja_requests_vote_own(inputs)
	return en_requests_vote_own(inputs)
});
