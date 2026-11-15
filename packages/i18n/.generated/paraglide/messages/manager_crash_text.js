/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Crash_TextInputs */

const en_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When the game crashes, the manager comes to the front and offers the RedLoader and game logs, so you can find the mod that caused it.`)
};

const es_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuando el juego se cierra con un error, el manager pasa al frente y te ofrece los registros de RedLoader y del juego para encontrar el mod que lo causó.`)
};

const de_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stürzt das Spiel ab, kommt der Manager nach vorne und bietet die Logs von RedLoader und dem Spiel an, damit du den verantwortlichen Mod findest.`)
};

const fr_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quand le jeu plante, le manager passe au premier plan et propose les journaux de RedLoader et du jeu pour trouver le mod en cause.`)
};

const it_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando il gioco va in crash, il manager passa in primo piano e offre i log di RedLoader e del gioco per trovare la mod responsabile.`)
};

const nl_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als de game crasht, komt de manager naar voren en biedt de logs van RedLoader en de game aan, zodat je de mod vindt die het veroorzaakte.`)
};

const pl_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy gra się wysypie, menedżer wychodzi na pierwszy plan i proponuje logi RedLoadera i gry, żebyś znalazł mod, który to spowodował.`)
};

const pt_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando o jogo fecha com erro, o manager vem para a frente e oferece os logs do RedLoader e do jogo para você achar o mod que causou o problema.`)
};

const ru_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Когда игра вылетает, менеджер выходит на передний план и предлагает логи RedLoader и игры, чтобы вы нашли мод, который это вызвал.`)
};

const sv_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När spelet kraschar kommer managern fram och erbjuder loggarna från RedLoader och spelet, så att du hittar modden som orsakade det.`)
};

const tr_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun çöktüğünde yönetici öne gelir ve RedLoader ile oyun günlüklerini açmayı önerir, böylece soruna yol açan modu bulursun.`)
};

const zh_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏崩溃时，管理器会跳到前台并提供 RedLoader 和游戏的日志，帮你找到出问题的模组。`)
};

const ja_manager_crash_text = /** @type {(inputs: Manager_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームがクラッシュすると、マネージャーが前面に出て RedLoader とゲームのログを開けるようにし、原因の Mod を探せます。`)
};

/**
* | output |
* | --- |
* | "When the game crashes, the manager comes to the front and offers the RedLoader and game logs, so you can find the mod that caused it." |
*
* @param {Manager_Crash_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_crash_text = /** @type {((inputs?: Manager_Crash_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Crash_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_crash_text(inputs)
	if (locale === "de") return de_manager_crash_text(inputs)
	if (locale === "fr") return fr_manager_crash_text(inputs)
	if (locale === "it") return it_manager_crash_text(inputs)
	if (locale === "nl") return nl_manager_crash_text(inputs)
	if (locale === "pl") return pl_manager_crash_text(inputs)
	if (locale === "pt") return pt_manager_crash_text(inputs)
	if (locale === "ru") return ru_manager_crash_text(inputs)
	if (locale === "sv") return sv_manager_crash_text(inputs)
	if (locale === "tr") return tr_manager_crash_text(inputs)
	if (locale === "zh") return zh_manager_crash_text(inputs)
	if (locale === "ja") return ja_manager_crash_text(inputs)
	return en_manager_crash_text(inputs)
});
