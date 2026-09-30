/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Intro_AutoInputs */

const en_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The short description is translated automatically into other languages when you publish or edit it. Write your own text to replace any translation; yours is never overwritten.`)
};

const es_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descripción corta se traduce automáticamente a otros idiomas cuando publicas o la editas. Escribe tu propio texto para reemplazar cualquier traducción; el tuyo nunca se sobrescribe.`)
};

const de_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kurzbeschreibung wird beim Veröffentlichen oder Bearbeiten automatisch in andere Sprachen übersetzt. Schreibe einen eigenen Text, um eine Übersetzung zu ersetzen; dein Text wird nie überschrieben.`)
};

const fr_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La description courte est traduite automatiquement dans d’autres langues quand vous la publiez ou la modifiez. Écrivez votre propre texte pour remplacer une traduction ; le vôtre n’est jamais écrasé.`)
};

const it_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descrizione breve viene tradotta automaticamente in altre lingue quando la pubblichi o la modifichi. Scrivi il tuo testo per sostituire una traduzione; il tuo non viene mai sovrascritto.`)
};

const nl_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De korte beschrijving wordt automatisch naar andere talen vertaald wanneer je hem publiceert of bewerkt. Schrijf je eigen tekst om een vertaling te vervangen; jouw tekst wordt nooit overschreven.`)
};

const pl_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótki opis jest automatycznie tłumaczony na inne języki po opublikowaniu lub edycji. Wpisz własny tekst, aby zastąpić dowolne tłumaczenie; Twój tekst nigdy nie zostanie nadpisany.`)
};

const pt_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A descrição curta é traduzida automaticamente para outros idiomas quando você publica ou edita. Escreva seu próprio texto para substituir qualquer tradução; o seu nunca é sobrescrito.`)
};

const ru_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Краткое описание автоматически переводится на другие языки при публикации или редактировании. Напишите свой текст, чтобы заменить любой перевод; ваш текст никогда не перезаписывается.`)
};

const sv_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den korta beskrivningen översätts automatiskt till andra språk när du publicerar eller redigerar den. Skriv din egen text för att ersätta en översättning; din text skrivs aldrig över.`)
};

const tr_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa açıklama, yayımladığında veya düzenlediğinde otomatik olarak diğer dillere çevrilir. Bir çeviriyi değiştirmek için kendi metnini yaz; seninki asla üzerine yazılmaz.`)
};

const zh_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布或编辑时，简短描述会自动翻译成其他语言。你可以写下自己的文本来替换任何译文，你的文本不会被覆盖。`)
};

const ja_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明は、公開または編集すると他の言語に自動で翻訳されます。自分の文章を書けば、どの翻訳も置き換えられます。あなたの文章が上書きされることはありません。`)
};

/**
* | output |
* | --- |
* | "The short description is translated automatically into other languages when you publish or edit it. Write your own text to replace any translation; yours is ..." |
*
* @param {Translations_Intro_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_intro_auto = /** @type {((inputs?: Translations_Intro_AutoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Intro_AutoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_intro_auto(inputs)
	if (locale === "de") return de_translations_intro_auto(inputs)
	if (locale === "fr") return fr_translations_intro_auto(inputs)
	if (locale === "it") return it_translations_intro_auto(inputs)
	if (locale === "nl") return nl_translations_intro_auto(inputs)
	if (locale === "pl") return pl_translations_intro_auto(inputs)
	if (locale === "pt") return pt_translations_intro_auto(inputs)
	if (locale === "ru") return ru_translations_intro_auto(inputs)
	if (locale === "sv") return sv_translations_intro_auto(inputs)
	if (locale === "tr") return tr_translations_intro_auto(inputs)
	if (locale === "zh") return zh_translations_intro_auto(inputs)
	if (locale === "ja") return ja_translations_intro_auto(inputs)
	return en_translations_intro_auto(inputs)
});
