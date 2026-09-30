/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Legacy_BodyInputs */

const en_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It was written on the old site, so its HTML still renders as formatting. Convert it to Markdown to edit it like any new description.`)
};

const es_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se escribió en el sitio anterior, así que su HTML aún se muestra con formato. Conviértela a Markdown para editarla como cualquier descripción nueva.`)
};

const de_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie wurde auf der alten Seite geschrieben, daher wird ihr HTML weiterhin formatiert dargestellt. Wandle sie in Markdown um, um sie wie eine neue Beschreibung zu bearbeiten.`)
};

const fr_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle a été écrite sur l'ancien site, son HTML s'affiche donc encore avec sa mise en forme. Convertissez-la en Markdown pour la modifier comme une nouvelle description.`)
};

const it_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È stata scritta sul vecchio sito, quindi il suo HTML viene ancora mostrato formattato. Convertila in Markdown per modificarla come una nuova descrizione.`)
};

const nl_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze is op de oude site geschreven, dus de HTML wordt nog steeds opgemaakt weergegeven. Zet haar om naar Markdown om haar te bewerken als een nieuwe beschrijving.`)
};

const pl_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Został napisany na starej stronie, więc jego HTML nadal jest wyświetlany z formatowaniem. Przekonwertuj go na Markdown, aby edytować jak nowy opis.`)
};

const pt_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foi escrita no site antigo, por isso o HTML ainda é exibido com formatação. Converta para Markdown para editá-la como qualquer descrição nova.`)
};

const ru_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оно написано на старом сайте, поэтому его HTML всё ещё отображается с форматированием. Преобразуйте его в Markdown, чтобы редактировать как новое описание.`)
};

const sv_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den skrevs på den gamla sajten, så dess HTML visas fortfarande formaterad. Konvertera den till Markdown för att redigera den som en ny beskrivning.`)
};

const tr_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski sitede yazıldığı için HTML'i hâlâ biçimlendirilmiş görünüyor. Yeni bir açıklama gibi düzenlemek için Markdown'a dönüştürün.`)
};

const zh_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它写于旧站点，因此其 HTML 仍按格式显示。转换为 Markdown 后即可像新描述一样编辑。`)
};

const ja_basecamp_listing_legacy_body = /** @type {(inputs: Basecamp_Listing_Legacy_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧サイトで書かれたため、HTMLは今も書式付きで表示されます。新しい説明と同じように編集するにはMarkdownに変換してください。`)
};

/**
* | output |
* | --- |
* | "It was written on the old site, so its HTML still renders as formatting. Convert it to Markdown to edit it like any new description." |
*
* @param {Basecamp_Listing_Legacy_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_legacy_body = /** @type {((inputs?: Basecamp_Listing_Legacy_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Legacy_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_legacy_body(inputs)
	if (locale === "de") return de_basecamp_listing_legacy_body(inputs)
	if (locale === "fr") return fr_basecamp_listing_legacy_body(inputs)
	if (locale === "it") return it_basecamp_listing_legacy_body(inputs)
	if (locale === "nl") return nl_basecamp_listing_legacy_body(inputs)
	if (locale === "pl") return pl_basecamp_listing_legacy_body(inputs)
	if (locale === "pt") return pt_basecamp_listing_legacy_body(inputs)
	if (locale === "ru") return ru_basecamp_listing_legacy_body(inputs)
	if (locale === "sv") return sv_basecamp_listing_legacy_body(inputs)
	if (locale === "tr") return tr_basecamp_listing_legacy_body(inputs)
	if (locale === "zh") return zh_basecamp_listing_legacy_body(inputs)
	if (locale === "ja") return ja_basecamp_listing_legacy_body(inputs)
	return en_basecamp_listing_legacy_body(inputs)
});
