/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Start_DescriptionInputs */

const en_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save your key in the SOTF_API_KEY environment variable and run this to check it works.`)
};

const es_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda tu clave en la variable de entorno SOTF_API_KEY y ejecuta esto para comprobar que funciona.`)
};

const de_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichere deinen Schlüssel in der Umgebungsvariable SOTF_API_KEY und führe das aus, um ihn zu prüfen.`)
};

const fr_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez votre clé dans la variable d’environnement SOTF_API_KEY et lancez ceci pour vérifier qu’elle fonctionne.`)
};

const it_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva la chiave nella variabile d’ambiente SOTF_API_KEY ed esegui questo comando per verificare che funzioni.`)
};

const nl_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewaar je sleutel in de omgevingsvariabele SOTF_API_KEY en voer dit uit om te controleren of hij werkt.`)
};

const pl_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz klucz w zmiennej środowiskowej SOTF_API_KEY i uruchom to, aby sprawdzić, czy działa.`)
};

const pt_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salve sua chave na variável de ambiente SOTF_API_KEY e rode isto para conferir se funciona.`)
};

const ru_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраните ключ в переменной окружения SOTF_API_KEY и выполните это, чтобы проверить его.`)
};

const sv_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara nyckeln i miljövariabeln SOTF_API_KEY och kör detta för att kontrollera att den fungerar.`)
};

const tr_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtarını SOTF_API_KEY ortam değişkenine kaydet ve çalıştığını görmek için bunu çalıştır.`)
};

const zh_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将密钥保存在环境变量 SOTF_API_KEY 中，运行以下命令检查是否有效。`)
};

const ja_api_start_description = /** @type {(inputs: Api_Start_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーを環境変数 SOTF_API_KEY に保存し、次のコマンドで動作を確認します。`)
};

/**
* | output |
* | --- |
* | "Save your key in the SOTF_API_KEY environment variable and run this to check it works." |
*
* @param {Api_Start_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_start_description = /** @type {((inputs?: Api_Start_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Start_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_start_description(inputs)
	if (locale === "de") return de_api_start_description(inputs)
	if (locale === "fr") return fr_api_start_description(inputs)
	if (locale === "it") return it_api_start_description(inputs)
	if (locale === "nl") return nl_api_start_description(inputs)
	if (locale === "pl") return pl_api_start_description(inputs)
	if (locale === "pt") return pt_api_start_description(inputs)
	if (locale === "ru") return ru_api_start_description(inputs)
	if (locale === "sv") return sv_api_start_description(inputs)
	if (locale === "tr") return tr_api_start_description(inputs)
	if (locale === "zh") return zh_api_start_description(inputs)
	if (locale === "ja") return ja_api_start_description(inputs)
	return en_api_start_description(inputs)
});
