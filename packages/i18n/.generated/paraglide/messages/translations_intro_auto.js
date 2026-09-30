/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Intro_AutoInputs */

const en_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The name, short description and description are translated automatically into other languages when you publish or edit them. Write your own text to replace any translation; yours is never overwritten.`)
};

const es_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre, la descripción corta y la descripción se traducen automáticamente a otros idiomas al publicarlos o editarlos. Escribe tu propio texto para reemplazar cualquier traducción; el tuyo nunca se sobrescribe.`)
};

const de_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name, Kurzbeschreibung und Beschreibung werden beim Veröffentlichen oder Bearbeiten automatisch in andere Sprachen übersetzt. Schreibe deinen eigenen Text, um eine Übersetzung zu ersetzen; deiner wird nie überschrieben.`)
};

const fr_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom, la description courte et la description sont traduits automatiquement dans d'autres langues à la publication ou à la modification. Écrivez votre propre texte pour remplacer une traduction ; le vôtre n'est jamais écrasé.`)
};

const it_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il nome, la descrizione breve e la descrizione vengono tradotti automaticamente in altre lingue quando li pubblichi o li modifichi. Scrivi il tuo testo per sostituire una traduzione; il tuo non viene mai sovrascritto.`)
};

const nl_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De naam, de korte beschrijving en de beschrijving worden bij het publiceren of bewerken automatisch naar andere talen vertaald. Schrijf je eigen tekst om een vertaling te vervangen; die van jou wordt nooit overschreven.`)
};

const pl_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa, krótki opis i opis są automatycznie tłumaczone na inne języki przy publikacji lub edycji. Napisz własny tekst, aby zastąpić tłumaczenie; Twój nigdy nie zostanie nadpisany.`)
};

const pt_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome, a descrição curta e a descrição são traduzidos automaticamente para outros idiomas ao publicar ou editar. Escreva o seu próprio texto para substituir uma tradução; o seu nunca é sobrescrito.`)
};

const ru_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название, краткое описание и описание автоматически переводятся на другие языки при публикации или редактировании. Напишите свой текст, чтобы заменить перевод; ваш текст никогда не перезаписывается.`)
};

const sv_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnet, den korta beskrivningen och beskrivningen översätts automatiskt till andra språk när du publicerar eller redigerar. Skriv din egen text för att ersätta en översättning; din skrivs aldrig över.`)
};

const tr_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad, kısa açıklama ve açıklama, yayınladığınızda veya düzenlediğinizde otomatik olarak diğer dillere çevrilir. Bir çeviriyi değiştirmek için kendi metninizi yazın; sizinki asla üzerine yazılmaz.`)
};

const zh_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称、简短描述和详细描述会在你发布或编辑时自动翻译成其他语言。你可以写下自己的文本来替换任何翻译，你的文本永远不会被覆盖。`)
};

const ja_translations_intro_auto = /** @type {(inputs: Translations_Intro_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前、短い説明、説明は、公開または編集すると自動的に他の言語へ翻訳されます。自分の文章を書けば翻訳を置き換えられ、あなたの文章が上書きされることはありません。`)
};

/**
* | output |
* | --- |
* | "The name, short description and description are translated automatically into other languages when you publish or edit them. Write your own text to replace a..." |
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
