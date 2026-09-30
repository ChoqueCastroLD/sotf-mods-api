/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Broken_TextInputs */

const en_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivors report that this mod doesn’t work on the current game build.`)
};

const es_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los supervivientes informan de que este mod no funciona en la versión actual del juego.`)
};

const de_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebende melden, dass dieser Mod mit der aktuellen Spielversion nicht funktioniert.`)
};

const fr_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des survivants signalent que ce mod ne fonctionne pas sur la version actuelle du jeu.`)
};

const it_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I sopravvissuti segnalano che questa mod non funziona con la versione attuale del gioco.`)
};

const nl_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevenden melden dat deze mod niet werkt op de huidige gameversie.`)
};

const pl_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocaleni zgłaszają, że ten mod nie działa z obecną wersją gry.`)
};

const pt_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviventes relatam que este mod não funciona na versão atual do jogo.`)
};

const ru_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выжившие сообщают, что мод не работает на текущей версии игры.`)
};

const sv_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevare rapporterar att moden inte fungerar i den aktuella spelversionen.`)
};

const tr_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalanlar bu modun oyunun güncel sürümünde çalışmadığını bildiriyor.`)
};

const zh_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者反馈此模组在当前游戏版本下无法使用。`)
};

const ja_mod_banner_broken_text = /** @type {(inputs: Mod_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーから、この MOD が現在のゲームバージョンで動かないと報告されています。`)
};

/**
* | output |
* | --- |
* | "Survivors report that this mod doesn’t work on the current game build." |
*
* @param {Mod_Banner_Broken_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_broken_text = /** @type {((inputs?: Mod_Banner_Broken_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Broken_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_broken_text(inputs)
	if (locale === "de") return de_mod_banner_broken_text(inputs)
	if (locale === "fr") return fr_mod_banner_broken_text(inputs)
	if (locale === "it") return it_mod_banner_broken_text(inputs)
	if (locale === "nl") return nl_mod_banner_broken_text(inputs)
	if (locale === "pl") return pl_mod_banner_broken_text(inputs)
	if (locale === "pt") return pt_mod_banner_broken_text(inputs)
	if (locale === "ru") return ru_mod_banner_broken_text(inputs)
	if (locale === "sv") return sv_mod_banner_broken_text(inputs)
	if (locale === "tr") return tr_mod_banner_broken_text(inputs)
	if (locale === "zh") return zh_mod_banner_broken_text(inputs)
	if (locale === "ja") return ja_mod_banner_broken_text(inputs)
	return en_mod_banner_broken_text(inputs)
});
