/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Prompt_Key_HintInputs */

const en_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This prompt reads the key from the SOTF_API_KEY variable. To get a prompt with the key inside, create a key: the option appears when it is shown.`)
};

const es_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este prompt lee la clave de la variable SOTF_API_KEY. Para un prompt con la clave dentro, crea una clave: la opción aparece cuando se muestra.`)
};

const de_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Prompt liest den Schlüssel aus der Variable SOTF_API_KEY. Für einen Prompt mit dem Schlüssel erstelle einen Schlüssel: Die Option erscheint, wenn er angezeigt wird.`)
};

const fr_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce prompt lit la clé dans la variable SOTF_API_KEY. Pour un prompt contenant la clé, créez une clé : l’option apparaît quand elle s’affiche.`)
};

const it_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo prompt legge la chiave dalla variabile SOTF_API_KEY. Per un prompt con la chiave dentro, crea una chiave: l’opzione compare quando viene mostrata.`)
};

const nl_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze prompt leest de sleutel uit de variabele SOTF_API_KEY. Voor een prompt met de sleutel erin maak je een sleutel: de optie verschijnt wanneer hij getoond wordt.`)
};

const pl_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten prompt odczytuje klucz ze zmiennej SOTF_API_KEY. Aby dostać prompt z kluczem w środku, utwórz klucz: opcja pojawi się, gdy zostanie wyświetlony.`)
};

const pt_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este prompt lê a chave da variável SOTF_API_KEY. Para um prompt com a chave dentro, crie uma chave: a opção aparece quando ela é mostrada.`)
};

const ru_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот промпт берёт ключ из переменной SOTF_API_KEY. Чтобы получить промпт с ключом внутри, создайте ключ: эта возможность появится, когда он будет показан.`)
};

const sv_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här prompten läser nyckeln från variabeln SOTF_API_KEY. För en prompt med nyckeln i, skapa en nyckel: alternativet visas när den visas.`)
};

const tr_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu prompt anahtarı SOTF_API_KEY değişkeninden okur. Anahtarın içinde olduğu bir prompt için bir anahtar oluştur: anahtar gösterildiğinde seçenek çıkar.`)
};

const zh_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此提示词从 SOTF_API_KEY 变量读取密钥。如需包含密钥的提示词，请创建密钥：密钥显示时会出现该选项。`)
};

const ja_api_prompt_key_hint = /** @type {(inputs: Api_Prompt_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このプロンプトはキーを SOTF_API_KEY 変数から読み込みます。キー入りのプロンプトが必要な場合は、キーを作成してください。キーの表示時にその選択肢が出ます。`)
};

/**
* | output |
* | --- |
* | "This prompt reads the key from the SOTF_API_KEY variable. To get a prompt with the key inside, create a key: the option appears when it is shown." |
*
* @param {Api_Prompt_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_prompt_key_hint = /** @type {((inputs?: Api_Prompt_Key_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Prompt_Key_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_prompt_key_hint(inputs)
	if (locale === "de") return de_api_prompt_key_hint(inputs)
	if (locale === "fr") return fr_api_prompt_key_hint(inputs)
	if (locale === "it") return it_api_prompt_key_hint(inputs)
	if (locale === "nl") return nl_api_prompt_key_hint(inputs)
	if (locale === "pl") return pl_api_prompt_key_hint(inputs)
	if (locale === "pt") return pt_api_prompt_key_hint(inputs)
	if (locale === "ru") return ru_api_prompt_key_hint(inputs)
	if (locale === "sv") return sv_api_prompt_key_hint(inputs)
	if (locale === "tr") return tr_api_prompt_key_hint(inputs)
	if (locale === "zh") return zh_api_prompt_key_hint(inputs)
	if (locale === "ja") return ja_api_prompt_key_hint(inputs)
	return en_api_prompt_key_hint(inputs)
});
