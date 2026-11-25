/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Prompt_With_Key_HintInputs */

const en_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The prompt includes this key: paste it only into an assistant you trust, and revoke the key if it leaks.`)
};

const es_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El prompt incluye esta clave: pégalo solo en un asistente de confianza y revoca la clave si se filtra.`)
};

const de_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Prompt enthält diesen Schlüssel: Füge ihn nur in einen vertrauenswürdigen Assistenten ein und widerrufe den Schlüssel, falls er bekannt wird.`)
};

const fr_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le prompt contient cette clé : collez-le seulement dans un assistant de confiance et révoquez la clé si elle fuite.`)
};

const it_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il prompt contiene questa chiave: incollalo solo in un assistente di cui ti fidi e revoca la chiave se trapela.`)
};

const nl_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De prompt bevat deze sleutel: plak hem alleen in een assistent die je vertrouwt en trek de sleutel in als hij uitlekt.`)
};

const pl_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt zawiera ten klucz: wklejaj go tylko do zaufanego asystenta i unieważnij klucz, jeśli wycieknie.`)
};

const pt_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O prompt inclui esta chave: cole apenas em um assistente de confiança e revogue a chave se ela vazar.`)
};

const ru_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Промпт содержит этот ключ: вставляйте его только в надёжного ассистента и отзовите ключ при утечке.`)
};

const sv_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompten innehåller nyckeln: klistra bara in den i en assistent du litar på och återkalla nyckeln om den läcker.`)
};

const tr_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt bu anahtarı içerir: yalnızca güvendiğin bir asistana yapıştır, sızarsa anahtarı iptal et.`)
};

const zh_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示词中包含此密钥：只粘贴到你信任的助手中，若泄露请撤销密钥。`)
};

const ja_api_prompt_with_key_hint = /** @type {(inputs: Api_Prompt_With_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロンプトにはこのキーが含まれます。信頼できるアシスタントにだけ貼り付け、漏れた場合はキーを取り消してください。`)
};

/**
* | output |
* | --- |
* | "The prompt includes this key: paste it only into an assistant you trust, and revoke the key if it leaks." |
*
* @param {Api_Prompt_With_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_prompt_with_key_hint = /** @type {((inputs?: Api_Prompt_With_Key_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Prompt_With_Key_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_prompt_with_key_hint(inputs)
	if (locale === "de") return de_api_prompt_with_key_hint(inputs)
	if (locale === "fr") return fr_api_prompt_with_key_hint(inputs)
	if (locale === "it") return it_api_prompt_with_key_hint(inputs)
	if (locale === "nl") return nl_api_prompt_with_key_hint(inputs)
	if (locale === "pl") return pl_api_prompt_with_key_hint(inputs)
	if (locale === "pt") return pt_api_prompt_with_key_hint(inputs)
	if (locale === "ru") return ru_api_prompt_with_key_hint(inputs)
	if (locale === "sv") return sv_api_prompt_with_key_hint(inputs)
	if (locale === "tr") return tr_api_prompt_with_key_hint(inputs)
	if (locale === "zh") return zh_api_prompt_with_key_hint(inputs)
	if (locale === "ja") return ja_api_prompt_with_key_hint(inputs)
	return en_api_prompt_with_key_hint(inputs)
});
