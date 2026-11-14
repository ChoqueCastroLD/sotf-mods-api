/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Crash_TextInputs */

const en_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`If the game crashes, the manager opens the logs so you can find the mod that caused it.`)
};

const es_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si el juego se cierra, el manager abre los registros para que encuentres el mod que lo causó.`)
};

const de_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stürzt das Spiel ab, öffnet der Manager die Logs, damit du den verantwortlichen Mod findest.`)
};

const fr_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si le jeu plante, le manager ouvre les journaux pour vous aider à trouver le mod en cause.`)
};

const it_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se il gioco va in crash, il manager apre i log per aiutarti a trovare la mod responsabile.`)
};

const nl_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crasht de game, dan opent de manager de logs zodat je de mod vindt die het veroorzaakte.`)
};

const pl_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy gra się wysypie, menedżer otworzy logi, żebyś znalazł mod, który to spowodował.`)
};

const pt_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se o jogo fechar com erro, o manager abre os logs para você achar o mod que causou o problema.`)
};

const ru_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если игра вылетает, менеджер откроет логи, чтобы вы нашли мод, который это вызвал.`)
};

const sv_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om spelet kraschar öppnar managern loggarna så att du hittar modden som orsakade det.`)
};

const tr_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun çökerse yönetici günlükleri açar, böylece soruna yol açan modu bulursun.`)
};

const zh_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏崩溃时，管理器会打开日志，帮你找到出问题的模组。`)
};

const ja_manager_feature_crash_text = /** @type {(inputs: Manager_Feature_Crash_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームがクラッシュすると、原因の Mod を探せるようにログを開きます。`)
};

/**
* | output |
* | --- |
* | "If the game crashes, the manager opens the logs so you can find the mod that caused it." |
*
* @param {Manager_Feature_Crash_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_crash_text = /** @type {((inputs?: Manager_Feature_Crash_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Crash_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_crash_text(inputs)
	if (locale === "de") return de_manager_feature_crash_text(inputs)
	if (locale === "fr") return fr_manager_feature_crash_text(inputs)
	if (locale === "it") return it_manager_feature_crash_text(inputs)
	if (locale === "nl") return nl_manager_feature_crash_text(inputs)
	if (locale === "pl") return pl_manager_feature_crash_text(inputs)
	if (locale === "pt") return pt_manager_feature_crash_text(inputs)
	if (locale === "ru") return ru_manager_feature_crash_text(inputs)
	if (locale === "sv") return sv_manager_feature_crash_text(inputs)
	if (locale === "tr") return tr_manager_feature_crash_text(inputs)
	if (locale === "zh") return zh_manager_feature_crash_text(inputs)
	if (locale === "ja") return ja_manager_feature_crash_text(inputs)
	return en_manager_feature_crash_text(inputs)
});
