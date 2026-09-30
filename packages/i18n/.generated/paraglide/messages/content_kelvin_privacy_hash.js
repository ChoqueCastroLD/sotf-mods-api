/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Privacy_HashInputs */

const en_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The chat id sent by the mod (it contains your Steam id and name) is stored only as an irreversible hash.`)
};

const es_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El identificador de chat que envía el mod (incluye tu id y nombre de Steam) solo se guarda como un hash irreversible.`)
};

const de_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Chat-ID, die der Mod sendet (sie enthält deine Steam-ID und deinen Namen), wird nur als nicht umkehrbarer Hash gespeichert.`)
};

const fr_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’identifiant de discussion envoyé par le mod (il contient votre identifiant et votre nom Steam) n’est conservé que sous forme de hachage irréversible.`)
};

const it_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ID della chat inviato dalla mod (contiene il tuo ID e il tuo nome Steam) viene salvato solo come hash irreversibile.`)
};

const nl_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De chat-id die de mod verstuurt (met je Steam-id en -naam) wordt alleen als onomkeerbare hash opgeslagen.`)
};

const pl_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator czatu wysyłany przez mod (zawiera twoje ID i nazwę Steam) jest przechowywany tylko jako nieodwracalny skrót.`)
};

const pt_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O ID de chat enviado pelo mod (ele contém seu ID e nome da Steam) é guardado apenas como um hash irreversível.`)
};

const ru_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Идентификатор чата, который отправляет мод (в нём ваш Steam ID и имя), хранится только в виде необратимого хеша.`)
};

const sv_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chatt-id:t som modden skickar (det innehåller ditt Steam-id och namn) sparas bara som en oåterkallelig hash.`)
};

const tr_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun gönderdiği sohbet kimliği (Steam kimliğini ve adını içerir) yalnızca geri döndürülemez bir özet (hash) olarak saklanır.`)
};

const zh_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组发送的聊天 ID（包含你的 Steam ID 和名称）只以不可逆的哈希形式保存。`)
};

const ja_content_kelvin_privacy_hash = /** @type {(inputs: Content_Kelvin_Privacy_HashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod が送信するチャット ID（Steam ID と名前を含む）は、元に戻せないハッシュとしてのみ保存されます。`)
};

/**
* | output |
* | --- |
* | "The chat id sent by the mod (it contains your Steam id and name) is stored only as an irreversible hash." |
*
* @param {Content_Kelvin_Privacy_HashInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_privacy_hash = /** @type {((inputs?: Content_Kelvin_Privacy_HashInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_HashInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_privacy_hash(inputs)
	if (locale === "de") return de_content_kelvin_privacy_hash(inputs)
	if (locale === "fr") return fr_content_kelvin_privacy_hash(inputs)
	if (locale === "it") return it_content_kelvin_privacy_hash(inputs)
	if (locale === "nl") return nl_content_kelvin_privacy_hash(inputs)
	if (locale === "pl") return pl_content_kelvin_privacy_hash(inputs)
	if (locale === "pt") return pt_content_kelvin_privacy_hash(inputs)
	if (locale === "ru") return ru_content_kelvin_privacy_hash(inputs)
	if (locale === "sv") return sv_content_kelvin_privacy_hash(inputs)
	if (locale === "tr") return tr_content_kelvin_privacy_hash(inputs)
	if (locale === "zh") return zh_content_kelvin_privacy_hash(inputs)
	if (locale === "ja") return ja_content_kelvin_privacy_hash(inputs)
	return en_content_kelvin_privacy_hash(inputs)
});
