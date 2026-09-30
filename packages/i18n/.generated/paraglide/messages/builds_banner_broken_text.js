/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Broken_TextInputs */

const en_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivors report that this build doesn’t work on the current game version.`)
};

const es_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay supervivientes que dicen que esta build no funciona en la versión actual del juego.`)
};

const de_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebende melden, dass dieser Build mit der aktuellen Spielversion nicht funktioniert.`)
};

const fr_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des survivants signalent que cette build ne fonctionne pas sur la version actuelle du jeu.`)
};

const it_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcuni sopravvissuti segnalano che questa build non funziona sulla versione attuale del gioco.`)
};

const nl_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevenden melden dat deze build niet werkt op de huidige gameversie.`)
};

const pl_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocalali zgłaszają, że ten build nie działa w obecnej wersji gry.`)
};

const pt_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviventes relatam que esta build não funciona na versão atual do jogo.`)
};

const ru_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выжившие сообщают, что эта постройка не работает в текущей версии игры.`)
};

const sv_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevare rapporterar att bygget inte fungerar på den aktuella spelversionen.`)
};

const tr_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalanlar bu yapının oyunun güncel sürümünde çalışmadığını bildiriyor.`)
};

const zh_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有幸存者报告此建筑在当前游戏版本中无法使用。`)
};

const ja_builds_banner_broken_text = /** @type {(inputs: Builds_Banner_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のゲームバージョンではこの建築が動作しないとサバイバーから報告されています。`)
};

/**
* | output |
* | --- |
* | "Survivors report that this build doesn’t work on the current game version." |
*
* @param {Builds_Banner_Broken_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_broken_text = /** @type {((inputs?: Builds_Banner_Broken_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Broken_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_broken_text(inputs)
	if (locale === "de") return de_builds_banner_broken_text(inputs)
	if (locale === "fr") return fr_builds_banner_broken_text(inputs)
	if (locale === "it") return it_builds_banner_broken_text(inputs)
	if (locale === "nl") return nl_builds_banner_broken_text(inputs)
	if (locale === "pl") return pl_builds_banner_broken_text(inputs)
	if (locale === "pt") return pt_builds_banner_broken_text(inputs)
	if (locale === "ru") return ru_builds_banner_broken_text(inputs)
	if (locale === "sv") return sv_builds_banner_broken_text(inputs)
	if (locale === "tr") return tr_builds_banner_broken_text(inputs)
	if (locale === "zh") return zh_builds_banner_broken_text(inputs)
	if (locale === "ja") return ja_builds_banner_broken_text(inputs)
	return en_builds_banner_broken_text(inputs)
});
