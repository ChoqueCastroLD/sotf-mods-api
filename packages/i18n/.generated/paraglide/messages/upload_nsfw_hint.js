/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Nsfw_HintInputs */

const en_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden from players who haven’t opted in.`)
};

const es_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto para los jugadores que no lo hayan activado.`)
};

const de_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen für Spieler, die es nicht aktiviert haben.`)
};

const fr_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué pour les joueurs qui ne l’ont pas activé.`)
};

const it_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosta ai giocatori che non l’hanno attivato.`)
};

const nl_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen voor spelers die het niet hebben ingeschakeld.`)
};

const pl_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte dla graczy, którzy tego nie włączyli.`)
};

const pt_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto para jogadores que não ativaram.`)
};

const ru_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт от игроков, которые его не включили.`)
};

const sv_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dold för spelare som inte har aktiverat det.`)
};

const tr_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunu açmamış oyunculardan gizlenir.`)
};

const zh_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对未开启此选项的玩家隐藏。`)
};

const ja_upload_nsfw_hint = /** @type {(inputs: Upload_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定を有効にしていないプレイヤーには表示されません。`)
};

/**
* | output |
* | --- |
* | "Hidden from players who haven’t opted in." |
*
* @param {Upload_Nsfw_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_nsfw_hint = /** @type {((inputs?: Upload_Nsfw_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Nsfw_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_nsfw_hint(inputs)
	if (locale === "de") return de_upload_nsfw_hint(inputs)
	if (locale === "fr") return fr_upload_nsfw_hint(inputs)
	if (locale === "it") return it_upload_nsfw_hint(inputs)
	if (locale === "nl") return nl_upload_nsfw_hint(inputs)
	if (locale === "pl") return pl_upload_nsfw_hint(inputs)
	if (locale === "pt") return pt_upload_nsfw_hint(inputs)
	if (locale === "ru") return ru_upload_nsfw_hint(inputs)
	if (locale === "sv") return sv_upload_nsfw_hint(inputs)
	if (locale === "tr") return tr_upload_nsfw_hint(inputs)
	if (locale === "zh") return zh_upload_nsfw_hint(inputs)
	if (locale === "ja") return ja_upload_nsfw_hint(inputs)
	return en_upload_nsfw_hint(inputs)
});
