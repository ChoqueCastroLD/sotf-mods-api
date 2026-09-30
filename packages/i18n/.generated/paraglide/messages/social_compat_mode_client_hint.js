/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_Client_HintInputs */

const en_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You join someone else’s game.`)
};

const es_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te unes a la partida de otra persona.`)
};

const de_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du trittst dem Spiel eines anderen bei.`)
};

const fr_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous rejoignez la partie de quelqu’un.`)
};

const it_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti unisci alla partita di qualcun altro.`)
};

const nl_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je doet mee met het spel van een ander.`)
};

const pl_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołączasz do czyjejś gry.`)
};

const pt_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você entra na partida de outra pessoa.`)
};

const ru_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подключаетесь к чужой игре.`)
};

const sv_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du går med i någon annans spel.`)
};

const tr_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başkasının oyununa katılıyorsun.`)
};

const zh_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你加入别人的游戏。`)
};

const ja_social_compat_mode_client_hint = /** @type {(inputs: Social_Compat_Mode_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの人のゲームに参加する。`)
};

/**
* | output |
* | --- |
* | "You join someone else’s game." |
*
* @param {Social_Compat_Mode_Client_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_client_hint = /** @type {((inputs?: Social_Compat_Mode_Client_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_Client_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_client_hint(inputs)
	if (locale === "de") return de_social_compat_mode_client_hint(inputs)
	if (locale === "fr") return fr_social_compat_mode_client_hint(inputs)
	if (locale === "it") return it_social_compat_mode_client_hint(inputs)
	if (locale === "nl") return nl_social_compat_mode_client_hint(inputs)
	if (locale === "pl") return pl_social_compat_mode_client_hint(inputs)
	if (locale === "pt") return pt_social_compat_mode_client_hint(inputs)
	if (locale === "ru") return ru_social_compat_mode_client_hint(inputs)
	if (locale === "sv") return sv_social_compat_mode_client_hint(inputs)
	if (locale === "tr") return tr_social_compat_mode_client_hint(inputs)
	if (locale === "zh") return zh_social_compat_mode_client_hint(inputs)
	if (locale === "ja") return ja_social_compat_mode_client_hint(inputs)
	return en_social_compat_mode_client_hint(inputs)
});
