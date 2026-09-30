/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_History_TextInputs */

const en_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It was previously known as Kelvin-GPT. The old version that asked for your own OpenAI key is retired: that route exposed the key in the address and now answers “Gone”.`)
};

const es_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes se llamaba Kelvin-GPT. La versión antigua que pedía tu propia clave de OpenAI está retirada: esa ruta exponía la clave en la dirección y ahora responde «Gone».`)
};

const de_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Früher hieß er Kelvin-GPT. Die alte Version, die deinen eigenen OpenAI-Schlüssel verlangte, ist abgeschaltet: Diese Route legte den Schlüssel in der Adresse offen und antwortet jetzt mit „Gone“.`)
};

const fr_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il s’appelait auparavant Kelvin-GPT. L’ancienne version qui demandait votre propre clé OpenAI est retirée : cette route exposait la clé dans l’adresse et répond désormais « Gone ».`)
};

const it_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In passato si chiamava Kelvin-GPT. La vecchia versione che chiedeva la tua chiave OpenAI è stata ritirata: quella rotta esponeva la chiave nell’indirizzo e ora risponde «Gone».`)
};

const nl_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vroeger heette hij Kelvin-GPT. De oude versie die om je eigen OpenAI-sleutel vroeg, is uitgeschakeld: die route toonde de sleutel in het adres en antwoordt nu met ‘Gone’.`)
};

const pl_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wcześniej nazywał się Kelvin-GPT. Stara wersja, która wymagała twojego klucza OpenAI, została wyłączona: ta trasa ujawniała klucz w adresie i teraz odpowiada „Gone”.`)
};

const pt_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes ele se chamava Kelvin-GPT. A versão antiga, que pedia sua própria chave da OpenAI, foi desativada: essa rota expunha a chave no endereço e agora responde “Gone”.`)
};

const ru_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Раньше он назывался Kelvin-GPT. Старая версия, которая просила ваш собственный ключ OpenAI, отключена: этот маршрут раскрывал ключ в адресе и теперь отвечает «Gone».`)
};

const sv_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tidigare hette den Kelvin-GPT. Den gamla versionen som krävde din egen OpenAI-nyckel är stängd: den rutten visade nyckeln i adressen och svarar nu ”Gone”.`)
};

const tr_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskiden adı Kelvin-GPT idi. Kendi OpenAI anahtarını isteyen eski sürüm kapatıldı: o rota anahtarı adreste açığa çıkarıyordu ve artık “Gone” yanıtı veriyor.`)
};

const zh_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它以前叫 Kelvin-GPT。需要你自己 OpenAI 密钥的旧版本已停用：那个路由会在地址中暴露密钥，现在只返回“Gone”。`)
};

const ja_content_kelvin_history_text = /** @type {(inputs: Content_Kelvin_History_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以前は Kelvin-GPT という名前でした。自分の OpenAI キーを必要とした旧版は廃止されました。そのルートはアドレスにキーが露出していたため、現在は「Gone」を返します。`)
};

/**
* | output |
* | --- |
* | "It was previously known as Kelvin-GPT. The old version that asked for your own OpenAI key is retired: that route exposed the key in the address and now answe..." |
*
* @param {Content_Kelvin_History_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_history_text = /** @type {((inputs?: Content_Kelvin_History_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_History_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_history_text(inputs)
	if (locale === "de") return de_content_kelvin_history_text(inputs)
	if (locale === "fr") return fr_content_kelvin_history_text(inputs)
	if (locale === "it") return it_content_kelvin_history_text(inputs)
	if (locale === "nl") return nl_content_kelvin_history_text(inputs)
	if (locale === "pl") return pl_content_kelvin_history_text(inputs)
	if (locale === "pt") return pt_content_kelvin_history_text(inputs)
	if (locale === "ru") return ru_content_kelvin_history_text(inputs)
	if (locale === "sv") return sv_content_kelvin_history_text(inputs)
	if (locale === "tr") return tr_content_kelvin_history_text(inputs)
	if (locale === "zh") return zh_content_kelvin_history_text(inputs)
	if (locale === "ja") return ja_content_kelvin_history_text(inputs)
	return en_content_kelvin_history_text(inputs)
});
