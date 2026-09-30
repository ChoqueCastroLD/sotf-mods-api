/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Play_TitleInputs */

const en_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Launch and play`)
};

const es_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre el juego y a jugar`)
};

const de_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starten und spielen`)
};

const fr_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lancez et jouez`)
};

const it_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvia e gioca`)
};

const nl_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starten en spelen`)
};

const pl_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uruchom i graj`)
};

const pt_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o jogo e jogue`)
};

const ru_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запускайте и играйте`)
};

const sv_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starta och spela`)
};

const tr_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlat ve oyna`)
};

const zh_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启动游戏开玩`)
};

const ja_landing_start_play_title = /** @type {(inputs: Landing_Start_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`起動してプレイ`)
};

/**
* | output |
* | --- |
* | "Launch and play" |
*
* @param {Landing_Start_Play_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_play_title = /** @type {((inputs?: Landing_Start_Play_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Play_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_play_title(inputs)
	if (locale === "de") return de_landing_start_play_title(inputs)
	if (locale === "fr") return fr_landing_start_play_title(inputs)
	if (locale === "it") return it_landing_start_play_title(inputs)
	if (locale === "nl") return nl_landing_start_play_title(inputs)
	if (locale === "pl") return pl_landing_start_play_title(inputs)
	if (locale === "pt") return pt_landing_start_play_title(inputs)
	if (locale === "ru") return ru_landing_start_play_title(inputs)
	if (locale === "sv") return sv_landing_start_play_title(inputs)
	if (locale === "tr") return tr_landing_start_play_title(inputs)
	if (locale === "zh") return zh_landing_start_play_title(inputs)
	if (locale === "ja") return ja_landing_start_play_title(inputs)
	return en_landing_start_play_title(inputs)
});
