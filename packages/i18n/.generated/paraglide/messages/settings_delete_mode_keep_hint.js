/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Mode_Keep_HintInputs */

const en_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players keep finding them, without your name attached.`)
};

const es_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los jugadores los siguen encontrando, sin tu nombre.`)
};

const de_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler finden sie weiterhin, ohne deinen Namen.`)
};

const fr_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les joueurs continuent de les trouver, sans votre nom.`)
};

const it_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I giocatori continuano a trovarle, senza il tuo nome.`)
};

const nl_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers vinden ze nog steeds, zonder jouw naam.`)
};

const pl_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze nadal je znajdą, ale bez twojego nazwiska.`)
};

const pt_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os jogadores continuam encontrando, sem o seu nome.`)
};

const ru_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки по-прежнему смогут их найти, но без вашего имени.`)
};

const sv_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare hittar dem fortfarande, utan ditt namn.`)
};

const tr_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular onları bulmaya devam eder, ama adın olmadan.`)
};

const zh_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家仍能找到它们，但不会显示你的名字。`)
};

const ja_settings_delete_mode_keep_hint = /** @type {(inputs: Settings_Delete_Mode_Keep_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーは引き続き見つけられますが、あなたの名前は表示されません。`)
};

/**
* | output |
* | --- |
* | "Players keep finding them, without your name attached." |
*
* @param {Settings_Delete_Mode_Keep_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_mode_keep_hint = /** @type {((inputs?: Settings_Delete_Mode_Keep_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Mode_Keep_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_mode_keep_hint(inputs)
	if (locale === "de") return de_settings_delete_mode_keep_hint(inputs)
	if (locale === "fr") return fr_settings_delete_mode_keep_hint(inputs)
	if (locale === "it") return it_settings_delete_mode_keep_hint(inputs)
	if (locale === "nl") return nl_settings_delete_mode_keep_hint(inputs)
	if (locale === "pl") return pl_settings_delete_mode_keep_hint(inputs)
	if (locale === "pt") return pt_settings_delete_mode_keep_hint(inputs)
	if (locale === "ru") return ru_settings_delete_mode_keep_hint(inputs)
	if (locale === "sv") return sv_settings_delete_mode_keep_hint(inputs)
	if (locale === "tr") return tr_settings_delete_mode_keep_hint(inputs)
	if (locale === "zh") return zh_settings_delete_mode_keep_hint(inputs)
	if (locale === "ja") return ja_settings_delete_mode_keep_hint(inputs)
	return en_settings_delete_mode_keep_hint(inputs)
});
