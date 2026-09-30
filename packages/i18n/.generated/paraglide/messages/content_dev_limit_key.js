/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ key: NonNullable<unknown> }} Content_Dev_Limit_KeyInputs */

const en_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`per IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`per account`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`per player`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const es_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`por IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`por cuenta`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`por jugador`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const de_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`pro IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`pro Konto`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`pro Spieler`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const fr_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`par IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`par compte`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`par joueur`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const it_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`per IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`per account`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`per giocatore`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const nl_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`per IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`per account`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`per speler`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const pl_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`na IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`na konto`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`na gracza`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const pt_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`por IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`por conta`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`por jogador`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const ru_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`на IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`на аккаунт`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`на игрока`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const sv_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`per IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`per konto`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`per spelare`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const tr_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`IP başına`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`hesap başına`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`oyuncu başına`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const zh_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`每个 IP`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`每个账号`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`每位玩家`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

const ja_content_dev_limit_key = /** @type {(inputs: Content_Dev_Limit_KeyInputs) => LocalizedString} */ (i) => {
	if (i?.key === "ip") return /** @type {LocalizedString} */ (`IP ごと`);
	if (i?.key === "user") return /** @type {LocalizedString} */ (`アカウントごと`);
	if (i?.key === "chat") return /** @type {LocalizedString} */ (`プレイヤーごと`);
	return /** @type {LocalizedString} */ (`${i?.key}`)
	
};

/**
* | key | output |
* | --- | --- |
* | "ip" | "per IP" |
* | "user" | "per account" |
* | "chat" | "per player" |
* | * | "{key}" |
*
* @param {Content_Dev_Limit_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_limit_key = /** @type {((inputs: Content_Dev_Limit_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Limit_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_limit_key(inputs)
	if (locale === "de") return de_content_dev_limit_key(inputs)
	if (locale === "fr") return fr_content_dev_limit_key(inputs)
	if (locale === "it") return it_content_dev_limit_key(inputs)
	if (locale === "nl") return nl_content_dev_limit_key(inputs)
	if (locale === "pl") return pl_content_dev_limit_key(inputs)
	if (locale === "pt") return pt_content_dev_limit_key(inputs)
	if (locale === "ru") return ru_content_dev_limit_key(inputs)
	if (locale === "sv") return sv_content_dev_limit_key(inputs)
	if (locale === "tr") return tr_content_dev_limit_key(inputs)
	if (locale === "zh") return zh_content_dev_limit_key(inputs)
	if (locale === "ja") return ja_content_dev_limit_key(inputs)
	return en_content_dev_limit_key(inputs)
});
