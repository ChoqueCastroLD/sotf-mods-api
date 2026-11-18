/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Ai_DescriptionInputs */

const en_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste this into Claude, Codex or another coding assistant before asking it to work on your mod. It tells the assistant where to start and how to use your key safely.`)
};

const es_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pégalo en Claude, Codex u otro asistente de código antes de pedirle que trabaje en tu mod. Le indica por dónde empezar y cómo usar tu clave de forma segura.`)
};

const de_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge das in Claude, Codex oder einen anderen Coding-Assistenten ein, bevor er an deinem Mod arbeitet. Es sagt ihm, wo er anfangen soll und wie er deinen Schlüssel sicher nutzt.`)
};

const fr_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez ceci dans Claude, Codex ou un autre assistant de code avant de lui demander de travailler sur votre mod. Il lui indique par où commencer et comment utiliser votre clé en sécurité.`)
};

const it_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incollalo in Claude, Codex o un altro assistente di programmazione prima di chiedergli di lavorare alla tua mod. Gli dice da dove iniziare e come usare la chiave in sicurezza.`)
};

const nl_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak dit in Claude, Codex of een andere code-assistent voordat je hem aan je mod laat werken. Hij weet dan waar hij moet beginnen en hoe hij je sleutel veilig gebruikt.`)
};

const pl_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej to do Claude, Codex lub innego asystenta kodowania, zanim poprosisz go o pracę nad modem. Mówi mu, od czego zacząć i jak bezpiecznie używać klucza.`)
};

const pt_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole isto no Claude, Codex ou outro assistente de código antes de pedir que trabalhe no seu mod. Ele diz por onde começar e como usar sua chave com segurança.`)
};

const ru_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте это в Claude, Codex или другого ассистента перед работой над модом. Он поймёт, с чего начать и как безопасно использовать ваш ключ.`)
};

const sv_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in detta i Claude, Codex eller en annan kodassistent innan du ber den arbeta med din modd. Den får veta var den ska börja och hur din nyckel används säkert.`)
};

const tr_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun üzerinde çalışmasını istemeden önce bunu Claude, Codex veya başka bir kod asistanına yapıştır. Nereden başlayacağını ve anahtarını nasıl güvenle kullanacağını söyler.`)
};

const zh_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在让 Claude、Codex 或其他编程助手处理你的模组之前，先粘贴这段内容。它会告诉助手从哪里开始，以及如何安全使用你的密钥。`)
};

const ja_api_ai_description = /** @type {(inputs: Api_Ai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claude、Codex などのコーディングアシスタントに Mod の作業を頼む前に貼り付けてください。どこから始めるか、キーを安全に使う方法が伝わります。`)
};

/**
* | output |
* | --- |
* | "Paste this into Claude, Codex or another coding assistant before asking it to work on your mod. It tells the assistant where to start and how to use your key..." |
*
* @param {Api_Ai_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_ai_description = /** @type {((inputs?: Api_Ai_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Ai_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_ai_description(inputs)
	if (locale === "de") return de_api_ai_description(inputs)
	if (locale === "fr") return fr_api_ai_description(inputs)
	if (locale === "it") return it_api_ai_description(inputs)
	if (locale === "nl") return nl_api_ai_description(inputs)
	if (locale === "pl") return pl_api_ai_description(inputs)
	if (locale === "pt") return pt_api_ai_description(inputs)
	if (locale === "ru") return ru_api_ai_description(inputs)
	if (locale === "sv") return sv_api_ai_description(inputs)
	if (locale === "tr") return tr_api_ai_description(inputs)
	if (locale === "zh") return zh_api_ai_description(inputs)
	if (locale === "ja") return ja_api_ai_description(inputs)
	return en_api_ai_description(inputs)
});
