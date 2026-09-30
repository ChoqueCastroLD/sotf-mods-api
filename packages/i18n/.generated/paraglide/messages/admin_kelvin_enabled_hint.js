/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Enabled_HintInputs */

const en_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Off: the game gets the offline answers only.`)
};

const es_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desactivado: el juego recibe solo las respuestas sin conexión.`)
};

const de_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus: Das Spiel bekommt nur die Offline-Antworten.`)
};

const fr_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactivé : le jeu ne reçoit que les réponses hors ligne.`)
};

const it_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disattivato: il gioco riceve solo le risposte offline.`)
};

const nl_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit: de game krijgt alleen de offline antwoorden.`)
};

const pl_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłączony: gra dostaje tylko odpowiedzi offline.`)
};

const pt_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desligado: o jogo recebe só as respostas offline.`)
};

const ru_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выключен: игра получает только офлайн-ответы.`)
};

const sv_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Av: spelet får bara offlinesvaren.`)
};

const tr_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapalı: oyun yalnızca çevrimdışı yanıtları alır.`)
};

const zh_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭后，游戏只会收到离线回复。`)
};

const ja_admin_kelvin_enabled_hint = /** @type {(inputs: Admin_Kelvin_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフのとき、ゲームにはオフライン応答だけが返ります。`)
};

/**
* | output |
* | --- |
* | "Off: the game gets the offline answers only." |
*
* @param {Admin_Kelvin_Enabled_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_enabled_hint = /** @type {((inputs?: Admin_Kelvin_Enabled_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Enabled_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_enabled_hint(inputs)
	if (locale === "de") return de_admin_kelvin_enabled_hint(inputs)
	if (locale === "fr") return fr_admin_kelvin_enabled_hint(inputs)
	if (locale === "it") return it_admin_kelvin_enabled_hint(inputs)
	if (locale === "nl") return nl_admin_kelvin_enabled_hint(inputs)
	if (locale === "pl") return pl_admin_kelvin_enabled_hint(inputs)
	if (locale === "pt") return pt_admin_kelvin_enabled_hint(inputs)
	if (locale === "ru") return ru_admin_kelvin_enabled_hint(inputs)
	if (locale === "sv") return sv_admin_kelvin_enabled_hint(inputs)
	if (locale === "tr") return tr_admin_kelvin_enabled_hint(inputs)
	if (locale === "zh") return zh_admin_kelvin_enabled_hint(inputs)
	if (locale === "ja") return ja_admin_kelvin_enabled_hint(inputs)
	return en_admin_kelvin_enabled_hint(inputs)
});
