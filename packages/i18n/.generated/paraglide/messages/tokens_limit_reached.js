/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Tokens_Limit_ReachedInputs */

const en_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You reached the limit of ${i?.max} active tokens. Revoke one to create another.`)
};

const es_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alcanzaste el límite de ${i?.max} tokens activos. Revoca uno para crear otro.`)
};

const de_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast das Limit von ${i?.max} aktiven Token erreicht. Widerrufe einen, um einen neuen zu erstellen.`)
};

const fr_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez atteint la limite de ${i?.max} jetons actifs. Révoquez-en un pour en créer un autre.`)
};

const it_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai raggiunto il limite di ${i?.max} token attivi. Revocane uno per crearne un altro.`)
};

const nl_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt de limiet van ${i?.max} actieve tokens bereikt. Trek er een in om een nieuwe te maken.`)
};

const pl_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Osiągnięto limit ${i?.max} aktywnych tokenów. Unieważnij jeden, aby utworzyć kolejny.`)
};

const pt_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você atingiu o limite de ${i?.max} tokens ativos. Revogue um para criar outro.`)
};

const ru_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Достигнут лимит в ${i?.max} активных токенов. Отзовите один, чтобы создать новый.`)
};

const sv_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du har nått gränsen på ${i?.max} aktiva tokens. Återkalla en för att skapa en ny.`)
};

const tr_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} etkin belirteç sınırına ulaştın. Yenisini oluşturmak için birini iptal et.`)
};

const zh_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已达到 ${i?.max} 个有效令牌的上限。请先撤销一个再创建新的。`)
};

const ja_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有効なトークンの上限（${i?.max} 件）に達しました。新しく作るには既存のトークンを失効してください。`)
};

/**
* | output |
* | --- |
* | "You reached the limit of {max} active tokens. Revoke one to create another." |
*
* @param {Tokens_Limit_ReachedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_limit_reached = /** @type {((inputs: Tokens_Limit_ReachedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Limit_ReachedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_limit_reached(inputs)
	if (locale === "de") return de_tokens_limit_reached(inputs)
	if (locale === "fr") return fr_tokens_limit_reached(inputs)
	if (locale === "it") return it_tokens_limit_reached(inputs)
	if (locale === "nl") return nl_tokens_limit_reached(inputs)
	if (locale === "pl") return pl_tokens_limit_reached(inputs)
	if (locale === "pt") return pt_tokens_limit_reached(inputs)
	if (locale === "ru") return ru_tokens_limit_reached(inputs)
	if (locale === "sv") return sv_tokens_limit_reached(inputs)
	if (locale === "tr") return tr_tokens_limit_reached(inputs)
	if (locale === "zh") return zh_tokens_limit_reached(inputs)
	if (locale === "ja") return ja_tokens_limit_reached(inputs)
	return en_tokens_limit_reached(inputs)
});
