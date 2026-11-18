/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Tokens_Limit_ReachedInputs */

const en_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You reached the limit of ${i?.max} active keys. Revoke one to create another.`)
};

const es_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Llegaste al límite de ${i?.max} claves activas. Revoca una para crear otra.`)
};

const de_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast das Limit von ${i?.max} aktiven Schlüsseln erreicht. Widerrufe einen, um einen neuen zu erstellen.`)
};

const fr_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez atteint la limite de ${i?.max} clés actives. Révoquez-en une pour en créer une autre.`)
};

const it_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai raggiunto il limite di ${i?.max} chiavi attive. Revocane una per crearne un’altra.`)
};

const nl_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt de limiet van ${i?.max} actieve sleutels bereikt. Trek er een in om een nieuwe te maken.`)
};

const pl_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Osiągnięto limit ${i?.max} aktywnych kluczy. Unieważnij jeden, aby utworzyć nowy.`)
};

const pt_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você atingiu o limite de ${i?.max} chaves ativas. Revogue uma para criar outra.`)
};

const ru_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Достигнут лимит в ${i?.max} активных ключей. Отзовите один, чтобы создать новый.`)
};

const sv_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du har nått gränsen på ${i?.max} aktiva nycklar. Återkalla en för att skapa en ny.`)
};

const tr_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} etkin anahtar sınırına ulaştın. Yeni bir tane oluşturmak için birini iptal et.`)
};

const zh_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已达到 ${i?.max} 个有效密钥的上限。撤销一个后才能创建新的。`)
};

const ja_tokens_limit_reached = /** @type {(inputs: Tokens_Limit_ReachedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有効なキーの上限 ${i?.max} 件に達しました。新しく作るには 1 つ取り消してください。`)
};

/**
* | output |
* | --- |
* | "You reached the limit of {max} active keys. Revoke one to create another." |
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
