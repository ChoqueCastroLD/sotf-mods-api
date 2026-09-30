/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_Client_HintInputs */

const en_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Runs in the game you play.`)
};

const es_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona en el juego con el que juegas.`)
};

const de_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft in dem Spiel, das du spielst.`)
};

const fr_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne dans le jeu auquel vous jouez.`)
};

const it_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona nel gioco a cui giochi.`)
};

const nl_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draait in de game die je speelt.`)
};

const pl_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa w grze, w którą grasz.`)
};

const pt_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roda no jogo que você joga.`)
};

const ru_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает в игре, в которую вы играете.`)
};

const sv_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Körs i spelet du spelar.`)
};

const tr_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oynadığın oyunda çalışır.`)
};

const zh_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在你玩的游戏中运行。`)
};

const ja_upload_platform_client_hint = /** @type {(inputs: Upload_Platform_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイ中のゲームで動作します。`)
};

/**
* | output |
* | --- |
* | "Runs in the game you play." |
*
* @param {Upload_Platform_Client_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_client_hint = /** @type {((inputs?: Upload_Platform_Client_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_Client_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_client_hint(inputs)
	if (locale === "de") return de_upload_platform_client_hint(inputs)
	if (locale === "fr") return fr_upload_platform_client_hint(inputs)
	if (locale === "it") return it_upload_platform_client_hint(inputs)
	if (locale === "nl") return nl_upload_platform_client_hint(inputs)
	if (locale === "pl") return pl_upload_platform_client_hint(inputs)
	if (locale === "pt") return pt_upload_platform_client_hint(inputs)
	if (locale === "ru") return ru_upload_platform_client_hint(inputs)
	if (locale === "sv") return sv_upload_platform_client_hint(inputs)
	if (locale === "tr") return tr_upload_platform_client_hint(inputs)
	if (locale === "zh") return zh_upload_platform_client_hint(inputs)
	if (locale === "ja") return ja_upload_platform_client_hint(inputs)
	return en_upload_platform_client_hint(inputs)
});
