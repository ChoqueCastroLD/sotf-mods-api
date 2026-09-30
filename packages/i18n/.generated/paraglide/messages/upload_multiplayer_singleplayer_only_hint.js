/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Singleplayer_Only_HintInputs */

const en_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not meant for multiplayer sessions.`)
};

const es_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No está pensado para partidas multijugador.`)
};

const de_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht für Mehrspieler-Sitzungen gedacht.`)
};

const fr_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas prévu pour les parties multijoueurs.`)
};

const it_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non pensata per le partite multigiocatore.`)
};

const nl_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet bedoeld voor multiplayersessies.`)
};

const pl_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie jest przeznaczony do gry wieloosobowej.`)
};

const pt_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi feito para partidas multijogador.`)
};

const ru_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не рассчитан на совместную игру.`)
};

const sv_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte tänkt för flerspelarsessioner.`)
};

const tr_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu oturumlar için tasarlanmadı.`)
};

const zh_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不适用于多人会话。`)
};

const ja_upload_multiplayer_singleplayer_only_hint = /** @type {(inputs: Upload_Multiplayer_Singleplayer_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイでの使用は想定していません。`)
};

/**
* | output |
* | --- |
* | "Not meant for multiplayer sessions." |
*
* @param {Upload_Multiplayer_Singleplayer_Only_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_singleplayer_only_hint = /** @type {((inputs?: Upload_Multiplayer_Singleplayer_Only_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Singleplayer_Only_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_singleplayer_only_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_singleplayer_only_hint(inputs)
	return en_upload_multiplayer_singleplayer_only_hint(inputs)
});
