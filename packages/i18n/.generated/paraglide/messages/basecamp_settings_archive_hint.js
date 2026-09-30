/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Archive_HintInputs */

const en_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark it as no longer maintained, optionally pointing players to its successor.`)
};

const es_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Márcalo como sin mantenimiento y, si quieres, envía a los jugadores a su sucesor.`)
};

const de_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als nicht mehr gepflegt markieren und Spieler auf Wunsch zum Nachfolger schicken.`)
};

const fr_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le marquer comme non maintenu, en renvoyant éventuellement les joueurs vers son successeur.`)
};

const it_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala come non più mantenuta e, se vuoi, indirizza i giocatori al suo successore.`)
};

const nl_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeer hem als niet meer onderhouden en stuur spelers eventueel naar de opvolger.`)
};

const pl_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz go jako nierozwijany i ewentualnie wskaż graczom następcę.`)
};

const pt_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como sem manutenção e, se quiser, indicar o sucessor aos jogadores.`)
};

const ru_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить как неподдерживаемый и при желании направить игроков к преемнику.`)
};

const sv_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera den som inte längre underhållen och hänvisa gärna spelare till efterföljaren.`)
};

const tr_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Artık bakımı yapılmıyor olarak işaretle, istersen oyuncuları halefine yönlendir.`)
};

const zh_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为不再维护，并可引导玩家前往后继模组。`)
};

const ja_basecamp_settings_archive_hint = /** @type {(inputs: Basecamp_Settings_Archive_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンテナンス終了として印を付け、必要なら後継の MOD へ案内します。`)
};

/**
* | output |
* | --- |
* | "Mark it as no longer maintained, optionally pointing players to its successor." |
*
* @param {Basecamp_Settings_Archive_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_archive_hint = /** @type {((inputs?: Basecamp_Settings_Archive_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Archive_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_archive_hint(inputs)
	if (locale === "de") return de_basecamp_settings_archive_hint(inputs)
	if (locale === "fr") return fr_basecamp_settings_archive_hint(inputs)
	if (locale === "it") return it_basecamp_settings_archive_hint(inputs)
	if (locale === "nl") return nl_basecamp_settings_archive_hint(inputs)
	if (locale === "pl") return pl_basecamp_settings_archive_hint(inputs)
	if (locale === "pt") return pt_basecamp_settings_archive_hint(inputs)
	if (locale === "ru") return ru_basecamp_settings_archive_hint(inputs)
	if (locale === "sv") return sv_basecamp_settings_archive_hint(inputs)
	if (locale === "tr") return tr_basecamp_settings_archive_hint(inputs)
	if (locale === "zh") return zh_basecamp_settings_archive_hint(inputs)
	if (locale === "ja") return ja_basecamp_settings_archive_hint(inputs)
	return en_basecamp_settings_archive_hint(inputs)
});
