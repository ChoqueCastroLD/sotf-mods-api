/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ perMinute: NonNullable<unknown>, perDay: NonNullable<unknown> }} Content_Kelvin_Limits_RateInputs */

const en_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("en", i?.perMinute, {});
	const perDay__number = registry.number("en", i?.perDay, {});return /** @type {LocalizedString} */ (`Up to ${perMinute__number} messages a minute and ${perDay__number} a day per player.`)
};

const es_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("es", i?.perMinute, {});
	const perDay__number = registry.number("es", i?.perDay, {});return /** @type {LocalizedString} */ (`Hasta ${perMinute__number} mensajes por minuto y ${perDay__number} al día por jugador.`)
};

const de_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("de", i?.perMinute, {});
	const perDay__number = registry.number("de", i?.perDay, {});return /** @type {LocalizedString} */ (`Bis zu ${perMinute__number} Nachrichten pro Minute und ${perDay__number} pro Tag und Spieler.`)
};

const fr_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("fr", i?.perMinute, {});
	const perDay__number = registry.number("fr", i?.perDay, {});return /** @type {LocalizedString} */ (`Jusqu’à ${perMinute__number} messages par minute et ${perDay__number} par jour et par joueur.`)
};

const it_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("it", i?.perMinute, {});
	const perDay__number = registry.number("it", i?.perDay, {});return /** @type {LocalizedString} */ (`Fino a ${perMinute__number} messaggi al minuto e ${perDay__number} al giorno per giocatore.`)
};

const nl_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("nl", i?.perMinute, {});
	const perDay__number = registry.number("nl", i?.perDay, {});return /** @type {LocalizedString} */ (`Tot ${perMinute__number} berichten per minuut en ${perDay__number} per dag per speler.`)
};

const pl_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("pl", i?.perMinute, {});
	const perDay__number = registry.number("pl", i?.perDay, {});return /** @type {LocalizedString} */ (`Do ${perMinute__number} wiadomości na minutę i ${perDay__number} dziennie na gracza.`)
};

const pt_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("pt", i?.perMinute, {});
	const perDay__number = registry.number("pt", i?.perDay, {});return /** @type {LocalizedString} */ (`Até ${perMinute__number} mensagens por minuto e ${perDay__number} por dia por jogador.`)
};

const ru_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("ru", i?.perMinute, {});
	const perDay__number = registry.number("ru", i?.perDay, {});return /** @type {LocalizedString} */ (`До ${perMinute__number} сообщений в минуту и ${perDay__number} в день на игрока.`)
};

const sv_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("sv", i?.perMinute, {});
	const perDay__number = registry.number("sv", i?.perDay, {});return /** @type {LocalizedString} */ (`Upp till ${perMinute__number} meddelanden per minut och ${perDay__number} per dag och spelare.`)
};

const tr_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("tr", i?.perMinute, {});
	const perDay__number = registry.number("tr", i?.perDay, {});return /** @type {LocalizedString} */ (`Oyuncu başına dakikada en fazla ${perMinute__number}, günde ${perDay__number} mesaj.`)
};

const zh_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("zh", i?.perMinute, {});
	const perDay__number = registry.number("zh", i?.perDay, {});return /** @type {LocalizedString} */ (`每位玩家每分钟最多 ${perMinute__number} 条消息，每天最多 ${perDay__number} 条。`)
};

const ja_content_kelvin_limits_rate = /** @type {(inputs: Content_Kelvin_Limits_RateInputs) => LocalizedString} */ (i) => {
	const perMinute__number = registry.number("ja", i?.perMinute, {});
	const perDay__number = registry.number("ja", i?.perDay, {});return /** @type {LocalizedString} */ (`プレイヤーごとに 1 分あたり最大 ${perMinute__number} 件、1 日あたり最大 ${perDay__number} 件のメッセージ。`)
};

/**
* | output |
* | --- |
* | "Up to {perMinute__number} messages a minute and {perDay__number} a day per player." |
*
* @param {Content_Kelvin_Limits_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_limits_rate = /** @type {((inputs: Content_Kelvin_Limits_RateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_RateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_limits_rate(inputs)
	if (locale === "de") return de_content_kelvin_limits_rate(inputs)
	if (locale === "fr") return fr_content_kelvin_limits_rate(inputs)
	if (locale === "it") return it_content_kelvin_limits_rate(inputs)
	if (locale === "nl") return nl_content_kelvin_limits_rate(inputs)
	if (locale === "pl") return pl_content_kelvin_limits_rate(inputs)
	if (locale === "pt") return pt_content_kelvin_limits_rate(inputs)
	if (locale === "ru") return ru_content_kelvin_limits_rate(inputs)
	if (locale === "sv") return sv_content_kelvin_limits_rate(inputs)
	if (locale === "tr") return tr_content_kelvin_limits_rate(inputs)
	if (locale === "zh") return zh_content_kelvin_limits_rate(inputs)
	if (locale === "ja") return ja_content_kelvin_limits_rate(inputs)
	return en_content_kelvin_limits_rate(inputs)
});
